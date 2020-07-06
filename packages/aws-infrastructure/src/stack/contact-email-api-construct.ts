import { Construct } from '@aws-cdk/core';
import { Bucket } from '@aws-cdk/aws-s3';
import { Code, Function as LambdaFunction, Runtime } from '@aws-cdk/aws-lambda';
import { LambdaIntegration, RestApi } from '@aws-cdk/aws-apigateway';
import { ARecord, HostedZone, RecordTarget } from '@aws-cdk/aws-route53';
import { ApiGateway } from '@aws-cdk/aws-route53-targets';
import { Certificate } from '@aws-cdk/aws-certificatemanager';
import { PolicyStatement } from "@aws-cdk/aws-iam";

export class ContactEmailApiConstruct extends Construct {
  constructor(
    scope: Construct,
    id: string,
    props: {
      domainName: string;
      certificateArn: string;
    },
  ) {
    super(scope, `${id}-ContactEmailApiConstruct`);

    const lambdaBucket = new Bucket(this, `${id}-LambdaBucket`);

    const handler = new LambdaFunction(this, `${id}-LambdaHandler`, {
      runtime: Runtime.NODEJS_12_X,
      code: Code.asset('./lib/lambda'),
      handler: 'contact.handler',
      environment: {
        BUCKET: lambdaBucket.bucketName,
      },
    });

    handler.addToRolePolicy(new PolicyStatement({
      actions: ['ses:SendEmail','ses:SendRawEmail'],
      resources: ['*']
    }))

    lambdaBucket.grantReadWrite(handler);

    const zone = HostedZone.fromLookup(this, `${id}-HostedZone`, {
      domainName: props.domainName,
    });
    const siteDomain = `contact.${props.domainName}`;

    const api = new RestApi(this, `${id}-API`, {
      restApiName: 'REST email API',
      description: 'REST API serving a POST endpoint to send emails.',
      defaultCorsPreflightOptions: {
        allowOrigins: [`http://${props.domainName}`],
        allowMethods: ['POST'],
      },
      domainName: {
        domainName: siteDomain,
        certificate: Certificate.fromCertificateArn(
          this,
          id,
          props.certificateArn,
        ),
      },
    });

    const lambdaIntegration = new LambdaIntegration(handler, {
      requestTemplates: { 'application/json': '{ "statusCode": "200" }' },
    });

    api.root.addMethod('POST', lambdaIntegration);

    // Route53 alias record for the CloudFront distribution
    new ARecord(this, `${id}-SiteAliasRecord`, {
      recordName: siteDomain,
      target: RecordTarget.fromAlias(new ApiGateway(api)),
      zone,
    });
  }
}
