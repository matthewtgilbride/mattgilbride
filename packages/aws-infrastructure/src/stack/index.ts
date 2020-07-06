import { App, Construct, Stack, StackProps } from '@aws-cdk/core';
import { StaticSiteConstruct } from './static-site.construct';
import { ContactEmailApiConstruct } from './contact-email-api-construct';

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
      assetsDirectory: '../../packages/mgilbride/public',
    });

    new ContactEmailApiConstruct(this, id, {
      domainName,
      certificateArn,
    });
  }
}

const app = new App();

new SiteStack(app, 'homepage', {
  env: {
    region: process.env.AWS_DEFAULT_REGION,
    account: process.env.AWS_ACCOUNT_NUMBER,
  },
});
