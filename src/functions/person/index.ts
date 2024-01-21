import { handlerPath } from '@libs/handler-resolver';

export const getAllPersons = {
    handler: `${handlerPath(__dirname)}/handler.getAllPersons`,
    events: [
      {
        http: {
          method: 'get',
          path: 'person/',
          cors: true,
          documentation: {
            summary: 'Get all persons',
            description: 'Retrieve a list of all persons.',
            tags: ['Persons'],
          },
        }
      }
    ],
  };

export const createPerson = {
    handler: `${handlerPath(__dirname)}/handler.createPerson`,
    events: [
        {
            http: {
                method: 'post',
                path: 'person',
            },
        },
    ],
};

export const getPerson = {
    handler: `${handlerPath(__dirname)}/handler.getPerson`,
    events: [
        {
            http: {
                method: 'get',
                path: 'person/{id}',
            },
        },
    ],
};

export const updatePerson = {
    handler: `${handlerPath(__dirname)}/handler.updatePerson`,
    events: [
        {
            http: {
                method: 'put',
                path: 'person/{id}',
            },
        },
    ],
};

export const deletePerson = {
    handler: `${handlerPath(__dirname)}/handler.deletePerson`,
    events: [
        {
            http: {
                method: 'delete',
                path: 'person/{id}',
            },
        },
    ],
};

export const swapi = {
    handler: `${handlerPath(__dirname)}/handler.swapi`,
    events: [
        {
            http: {
                method: 'get',
                path: 'swapi/{id}',
            },
        },
    ],
};

export const swagger = {
    handler: `${handlerPath(__dirname)}/handler.swagger`,
    events: [
        {
            http: {
                method: 'get',
                path: 'api-docs',
            },
        },
    ],
};




