import express from 'express';
import swaggerUI from 'swagger-ui-express';
import dotenv from 'dotenv';
import router from './route/routes.js';
import swaggerSetup from './docs/config.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(router);
app.use('/microservice_payment/documentation',swaggerUI.serve,swaggerUI.setup(swaggerSetup));

const server = app.listen(PORT,()=>{
  console.log('server run on port',PORT);
});

export {app,server};