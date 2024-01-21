import { SwaggerOptions } from 'swagger-jsdoc';

const swaggerOptions: SwaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Swagger Person API',
      description: 'API de ejemplo de Swagger',
      contact: {
        name: 'OBSK',
      },
      servers: ['http://localhost:3000'],
    },
  },
  apis: ['./src/functions/*.ts'],
};

export default swaggerOptions;
