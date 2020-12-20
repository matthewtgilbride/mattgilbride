import { Construct, RemovalPolicy } from '@aws-cdk/core';
import { ARecord, HostedZone, RecordTarget } from '@aws-cdk/aws-route53';
import { Bucket } from '@aws-cdk/aws-s3';
import {
  CloudFrontWebDistribution,
  OriginProtocolPolicy,
  SecurityPolicyProtocol,
  SSLMethod,
} from '@aws-cdk/aws-cloudfront';
import { CloudFrontTarget } from '@aws-cdk/aws-route53-targets';

export interface StaticSiteProps {
  domainName: string;
  siteSubDomain: string;
  certificateArn: string;
}

export class StaticSiteConstruct extends Construct {
  constructor(scope: Construct, id: string, props: StaticSiteProps) {
    super(scope, `${id}-StaticSiteConstruct`);

    const zone = HostedZone.fromLookup(this, `${id}-HostedZone`, {
      domainName: props.domainName,
    });
    const siteDomain = `${props.siteSubDomain}.${props.domainName}`;

    // Content bucket
    const siteBucket = new Bucket(this, `${id}-SiteBucket`, {
      bucketName: siteDomain,
      websiteIndexDocument: 'index.html',
      publicReadAccess: true,

      // The default removal policy is RETAIN, which means that cdk destroy will not attempt to delete
      // the new bucket, and it will remain in your account until manually deleted. By setting the policy to
      // DESTROY, cdk destroy will attempt to delete the bucket, but will error if the bucket is not empty.
      removalPolicy: RemovalPolicy.DESTROY, // NOT recommended for production code
    });

    // CloudFront distribution that provides HTTPS
    const distribution = new CloudFrontWebDistribution(
      this,
      `${id}-SiteDistribution`,
      {
        aliasConfiguration: {
          acmCertRef: props.certificateArn,
          names: [siteDomain],
          sslMethod: SSLMethod.SNI,
          securityPolicy: SecurityPolicyProtocol.TLS_V1_1_2016,
        },
        originConfigs: [
          {
            customOriginSource: {
              domainName: siteBucket.bucketWebsiteDomainName,
              originProtocolPolicy: OriginProtocolPolicy.HTTP_ONLY,
            },
            behaviors: [{ isDefaultBehavior: true }],
          },
        ],
      },
    );

    // Route53 alias record for the CloudFront distribution
    new ARecord(this, 'SiteAliasRecord', {
      recordName: siteDomain,
      target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
      zone,
    });
  }
}
