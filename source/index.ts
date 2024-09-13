import express from 'express';
import swaggerUI from 'swagger-ui-express';
import dotenv from 'dotenv';
import router from './controllers/routes_controllers.js';
import swaggerSetup from './docs/config.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(router);
app.use('/microservice_payment/documentation',swaggerUI.serve,swaggerUI.setup(swaggerSetup));
app.listen(PORT,()=>{
  console.clear();
  console.log('server run on port',PORT);
});