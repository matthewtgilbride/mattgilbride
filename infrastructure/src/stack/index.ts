import { App, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { StaticSiteConstruct } from './static-site.construct';

class SiteStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const domainName = `mattgilbride.com`;
    const siteSubDomain = 'www';
    const certificateArn = process.env.CERTIFICATE_ARN as string;

    new StaticSiteConstruct(this, id, {
      domainName,
      siteSubDomain,
      certificateArn,
    });
  }
}

const app = new App();

new SiteStack(app, 'homepage', {
  env: {
    region: process.env.AWS_DEFAULT_REGION || process.env.CDK_DEFAULT_REGION,
    account: process.env.AWS_ACCOUNT_NUMBER || process.env.CDK_DEFAULT_ACCOUNT,
  },
});
