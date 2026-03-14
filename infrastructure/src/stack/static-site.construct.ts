import { RemovalPolicy } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as targets from 'aws-cdk-lib/aws-route53-targets';

export interface StaticSiteProps {
  domainName: string;
  siteSubDomain: string;
  certificateArn: string;
}

export class StaticSiteConstruct extends Construct {
  constructor(scope: Construct, id: string, props: StaticSiteProps) {
    super(scope, `${id}-StaticSiteConstruct`);

    const zone = route53.HostedZone.fromLookup(this, `${id}-HostedZone`, {
      domainName: props.domainName,
    });
    const siteDomain = `${props.siteSubDomain}.${props.domainName}`;

    const certificate = acm.Certificate.fromCertificateArn(
      this,
      `${id}-Certificate`,
      props.certificateArn,
    );

    // Content bucket
    const siteBucket = new s3.Bucket(this, `${id}-SiteBucket`, {
      bucketName: siteDomain,
      websiteIndexDocument: 'index.html',
      publicReadAccess: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS,

      // The default removal policy is RETAIN, which means that cdk destroy will not attempt to delete
      // the new bucket, and it will remain in your account until manually deleted. By setting the policy to
      // DESTROY, cdk destroy will attempt to delete the bucket, but will error if the bucket is not empty.
      removalPolicy: RemovalPolicy.DESTROY, // NOT recommended for production code
    });

    // CloudFront distribution that provides HTTPS
    const distribution = new cloudfront.Distribution(
      this,
      `${id}-SiteDistribution`,
      {
        certificate,
        domainNames: [siteDomain, props.domainName],
        minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
        sslSupportMethod: cloudfront.SSLMethod.SNI,
        defaultBehavior: {
          origin: new origins.HttpOrigin(siteBucket.bucketWebsiteDomainName, {
            protocolPolicy: cloudfront.OriginProtocolPolicy.HTTP_ONLY,
          }),
          viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
      },
    );

    // Preserve the logical ID from the original CloudFrontWebDistribution deployment
    // to avoid replacing the existing distribution (which would fail due to CNAME conflicts)
    const cfnDistribution = distribution.node.defaultChild as cloudfront.CfnDistribution;
    cfnDistribution.overrideLogicalId('homepageStaticSiteConstructhomepageSiteDistributionCFDistributionE401C628');

    // Route53 alias records for the CloudFront distribution
    new route53.ARecord(this, 'SiteAliasRecord', {
      recordName: siteDomain,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(distribution),
      ),
      zone,
    });

    new route53.ARecord(this, 'ApexAliasRecord', {
      recordName: props.domainName,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(distribution),
      ),
      zone,
    });
  }
}
