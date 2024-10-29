import express from 'express';
import swaggerUI from 'swagger-ui-express';
import dotenv from 'dotenv';
import router from './routes/routes.js';
import swaggerSetup from './docs/config.js';
import { cronJob } from './monitoring/monitoring.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(router);
app.use('/microservice_payment/documentation',swaggerUI.serve,swaggerUI.setup(swaggerSetup));

const server = app.listen(PORT,()=>{
  cronJob.start();
  console.log('server run on port',PORT);
});

export {app,server};