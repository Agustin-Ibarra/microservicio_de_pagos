import express from 'express';
import router from './controllers/routes_controllers';
console.clear();
const app = express();
const PORT:number = 4242

app.use(router);
app.listen(PORT,()=>{
  console.log('server on port',PORT);
});