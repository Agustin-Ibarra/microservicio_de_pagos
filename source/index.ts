import express from 'express';
import router from './controllers/routes_controllers.js';
import swaggerUI from 'swagger-ui-express';
import swaggerSetup from './docs/config.js'
const app = express();
const PORT:number = 4242

app.use(router);
app.use('/microservice_payment/documentation',swaggerUI.serve,swaggerUI.setup(swaggerSetup));
app.listen(PORT,()=>{
  console.clear();
  console.log('server run on port',PORT);
});