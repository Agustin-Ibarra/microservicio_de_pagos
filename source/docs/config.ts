import swaggerJsDoc, { OAS3Definition, OAS3Options } from 'swagger-jsdoc';
import path from 'path';

const _dirname = path.resolve();

const swaggerDefinition: OAS3Definition = {
  openapi:"3.0.0",
  info:{
    title:'Documentacion de apis Microservicios de pagos',
    version:'1.0.0'
  },
  servers:[{url:'http://localhost:3000'}]
}

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis:[path.join(_dirname,'/source/docs/docs.ts')]
}

export default swaggerJsDoc(swaggerOptions);