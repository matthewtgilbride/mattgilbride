import { APIGatewayEvent, ProxyResult } from 'aws-lambda';
import { SendEmailRequest } from 'aws-sdk/clients/ses';
import { SES } from 'aws-sdk';

export const handler = async (event: APIGatewayEvent): Promise<ProxyResult> => {
  try {
    const { path, httpMethod, body } = event;

    if (path === '/' && httpMethod === 'POST') {
      const ses = new SES();

      const params: SendEmailRequest = {
        Source: 'matthewtgilbride@gmail.com',
        Destination: {
          ToAddresses: ['matthewtgilbride@gmail.com'],
        },
        Message: {
          Subject: {
            Data: 'IMPORTANT: mattgilbride.com contact message',
            Charset: 'UTF-8',
          },
          Body: {
            Text: {
              Data: body || ''.toString(),
              Charset: 'UTF-8',
            },
          },
        },
      };

      const response = await ses.sendEmail(params).promise();
      console.debug(response);

      return {
        statusCode: 200,
        body: 'email sent',
      };
    }

    return {
      statusCode: 404,
      body: 'Only POST / is accepted',
    };
  } catch (e) {
    console.error(e);
    const message = e.stack || JSON.stringify(e, null, 2);
    return {
      statusCode: 400,
      body: JSON.stringify(message, null, 2),
    };
  }
};
