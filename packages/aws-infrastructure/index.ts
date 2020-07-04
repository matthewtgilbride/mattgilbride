import { App, RemovalPolicy, Stack, StackProps } from '@aws-cdk/core';
import { Bucket } from '@aws-cdk/aws-s3';
import { ARecord, HostedZone, RecordTarget } from '@aws-cdk/aws-route53';
import {
  CloudFrontWebDistribution,
  SecurityPolicyProtocol,
  SSLMethod,
} from '@aws-cdk/aws-cloudfront';
import { BucketDeployment, Source } from '@aws-cdk/aws-s3-deployment';
import { CloudFrontTarget } from '@aws-cdk/aws-route53-targets';
import { DnsValidatedCertificate } from '@aws-cdk/aws-certificatemanager';

export interface StaticSiteProps {
  domainName: string;
  siteSubDomain: string;
  assetsDirectory: string;
}

class StaticSiteStack extends Stack {
  constructor(app: App, id: string, props: StaticSiteProps & StackProps) {
    super(app, id, props);

    const zone = HostedZone.fromLookup(this, 'Zone', {
      domainName: props.domainName,
    });
    const siteDomain = `${props.siteSubDomain}.${props.domainName}`;

    // Content bucket
    const siteBucket = new Bucket(this, 'SiteBucket', {
      bucketName: siteDomain,
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'error.html',
      publicReadAccess: true,

      // The default removal policy is RETAIN, which means that cdk destroy will not attempt to delete
      // the new bucket, and it will remain in your account until manually deleted. By setting the policy to
      // DESTROY, cdk destroy will attempt to delete the bucket, but will error if the bucket is not empty.
      removalPolicy: RemovalPolicy.DESTROY, // NOT recommended for production code
    });

    // TLS certificate
    const { certificateArn } = new DnsValidatedCertificate(
      this,
      'SiteCertificate',
      {
        domainName: siteDomain,
        hostedZone: zone,
        region: 'us-east-1', // Cloudfront only checks this region for certificates.
      },
    );

    // CloudFront distribution that provides HTTPS
    const distribution = new CloudFrontWebDistribution(
      this,
      'SiteDistribution',
      {
        aliasConfiguration: {
          acmCertRef: certificateArn,
          names: [siteDomain],
          sslMethod: SSLMethod.SNI,
          securityPolicy: SecurityPolicyProtocol.TLS_V1_1_2016,
        },
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: siteBucket,
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

    // Deploy site contents to S3 bucket
    new BucketDeployment(this, 'DeployWithInvalidation', {
      sources: [Source.asset(props.assetsDirectory)],
      destinationBucket: siteBucket,
      distribution,
      distributionPaths: ['/*'],
    });
  }
}

const app = new App();

new StaticSiteStack(app, 'StaticSiteStack', {
  env: {
    // Stack must be in us-east-1, because the ACM certificate for a
    // global CloudFront distribution must be requested in us-east-1.
    region: process.env.AWS_DEFAULT_REGION,
    account: process.env.AWS_ACCOUNT_NUMBER,
  },
  domainName: 'mattgilbride.com',
  siteSubDomain: 'www',
  assetsDirectory: '../mgilbride/public',
});
