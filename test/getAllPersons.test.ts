import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { getAllPersons } from '../src/functions/person/handler';

describe('getAllPersons route', () => {
  // Initialize mockContext with an empty object
  const mockContext: Context = {} as unknown as Context;

  // Mock the event for testing
  const mockEvent: APIGatewayProxyEvent = {
    body: null,
    headers: {},
    multiValueHeaders: {},
    httpMethod: 'GET',
    isBase64Encoded: false,
    path: 'person/',
    pathParameters: {},
    queryStringParameters: null,
    multiValueQueryStringParameters: null,
    stageVariables: null,
    requestContext: null as any,
    resource: '',
  };

  test('handler returns 200 status code', async () => {
    const response = await getAllPersons.handler(mockEvent, mockContext);

    // Add your assertions based on what you expect from the response
    expect(response.statusCode).toBe(200);
    // Add more assertions if needed
  });
});