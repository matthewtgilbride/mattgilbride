import { RemovalPolicy } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
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
    const distribution = new cloudfront.CloudFrontWebDistribution(
      this,
      `${id}-SiteDistribution`,
      {
        viewerCertificate: cloudfront.ViewerCertificate.fromAcmCertificate(
          certificate,
          {
            aliases: [siteDomain],
            sslMethod: cloudfront.SSLMethod.SNI,
            securityPolicy: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
          },
        ),
        originConfigs: [
          {
            customOriginSource: {
              domainName: siteBucket.bucketWebsiteDomainName,
              originProtocolPolicy: cloudfront.OriginProtocolPolicy.HTTP_ONLY,
            },
            behaviors: [{ isDefaultBehavior: true }],
          },
        ],
      },
    );

    // Route53 alias record for the CloudFront distribution
    new route53.ARecord(this, 'SiteAliasRecord', {
      recordName: siteDomain,
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(distribution),
      ),
      zone,
    });
  }
}
