import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { getAllPersons, createPerson, getPerson, updatePerson, deletePerson, swapi } from '../src/functions/person/handler';

describe('Person API Routes', () => {
  const mockContext: Context = {} as any; 

  const mockEvent: APIGatewayProxyEvent = {
    body: null,
    headers: {},
    multiValueHeaders: {},
    httpMethod: '',
    isBase64Encoded: false,
    path: '',
    pathParameters: {},
    queryStringParameters: null,
    multiValueQueryStringParameters: null,
    stageVariables: null,
    requestContext: null as any,
    resource: '',
  };

  test('getAllPersons route', async () => {
    const response = await getAllPersons.handler(mockEvent, mockContext);

    // Add your assertions based on what you expect from the response
    expect(response.statusCode).toBe(200);
    // Add more assertions if needed
  });

  test('createPerson route', async () => {
    const response = await createPerson.handler(mockEvent, mockContext);

    // Add your assertions based on what you expect from the response
    expect(response.statusCode).toBe(200);
    // Add more assertions if needed
  });

  test('getPerson route', async () => {
    const response = await getPerson.handler(mockEvent, mockContext);

    // Add your assertions based on what you expect from the response
    expect(response.statusCode).toBe(200);
    // Add more assertions if needed
  });

  test('updatePerson route', async () => {
    const response = await updatePerson.handler(mockEvent, mockContext);

    // Add your assertions based on what you expect from the response
    expect(response.statusCode).toBe(200);
    // Add more assertions if needed
  });

  test('deletePerson route', async () => {
    const response = await deletePerson.handler(mockEvent, mockContext);

    // Add your assertions based on what you expect from the response
    expect(response.statusCode).toBe(200);
    // Add more assertions if needed
  });

  test('swapi route', async () => {
    const response = await swapi.handler(mockEvent, mockContext);

    // Add your assertions based on what you expect from the response
    expect(response.statusCode).toBe(200);
    // Add more assertions if needed
  });
});
