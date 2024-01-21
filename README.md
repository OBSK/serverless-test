
# Serverless Test

Proyecto que utiliza la API de Swapi, serverless, lambda, entre otros.


## Demo

GET - https://qsey3fembf.execute-api.us-east-1.amazonaws.com/dev/person

POST - https://qsey3fembf.execute-api.us-east-1.amazonaws.com/dev/person

GET - https://qsey3fembf.execute-api.us-east-1.amazonaws.com/dev/person/{id}

PUT - https://qsey3fembf.execute-api.us-east-1.amazonaws.com/dev/person/{id}

DELETE - https://qsey3fembf.execute-api.us-east-1.amazonaws.com/dev/person/{id}

GET - https://qsey3fembf.execute-api.us-east-1.amazonaws.com/dev/swapi/{id}


## Installation

git clone https://github.com/OBSK/serverless-test.git

Install serverless-test with npm

```bash
  npm install serverless-test
  cd serverless-test
```
    ### Deployment
```bash
  serverless deploy
```

## Locally

To deploy this project run

```bash
  npm run start
```

## Test

To test this project run

```bash
  npm run test
```
## Test your service

This template contains a single lambda function triggered by an HTTP request made on the provisioned API Gateway REST API `/hello` route with `POST` method. The request body must be provided as `application/json`. The body structure is tested by API Gateway against `src/functions/hello/schema.ts` JSON-Schema definition: it must contain the `name` property.

- requesting any other path than `/hello` with any other method than `POST` will result in API Gateway returning a `403` HTTP error code
- sending a `POST` request to `/hello` with a payload **not** containing a string property named `name` will result in API Gateway returning a `400` HTTP error code
- sending a `POST` request to `/hello` with a payload containing a string property named `name` will result in API Gateway returning a `200` HTTP status code with a message saluting the provided name and the detailed event processed by the lambda

> :warning: As is, this template, once deployed, opens a **public** endpoint within your AWS account resources. Anybody with the URL can actively execute the API Gateway endpoint and the corresponding lambda. You should protect this endpoint with the authentication method of your choice.

### Remotely

Copy and replace your `url` - found in Serverless `deploy` command output - and `name` parameter in the following `curl` command in your terminal or in Postman to test your newly deployed application.

```
curl --location --request POST 'https://myApiEndpoint/dev/hello' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Frederic"
}'
```
## Authors

- [@obsk](https://github.com/OBSK)

