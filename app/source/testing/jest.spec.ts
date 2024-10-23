import request from 'supertest';
import {app,server} from '../index.js';

const item = {
  items:[
    {
      "item":"test",
      "itemInfo":"tesing",
      "price":10,
      "amount":2
    }
  ],
  success:"http://localhost:4242/payment_items",
  cancel:"http://localhost:4242/payment_items"
}

const subscription = {
  idPrice:"price_1PfWjpCPAgcnoLpT4MqJC8cl",
  success:"http://localhost:4242/succes_payment",
  cancel:"http://localhost:4242/cancel_payment"
}

const itemsError = [
  {
    items:[
      {
        "item":"test",
        "itemInfo":"tesing",
        "price":10,
        "amount":2
      }
    ],
    success:"",
    cancel:"http://localhost:4242/payment_items"
  },
  {
    items:[
      {
        "item":"test",
        "itemInfo":"tesing",
        "price":10,
        "amount":2
      }
    ],
    success:"http://localhost:4242/payment_items",
    cancel:""
  },  {
    items:[
      {
        "item":"",
        "itemInfo":"tesing",
        "price":10,
        "amount":2
      }
    ],
    success:"http://localhost:4242/payment_items",
    cancel:"http://localhost:4242/payment_items"
  },  {
    items:[
      {
        "item":"test",
        "itemInfo":"",
        "price":10,
        "amount":2
      }
    ],
    success:"http://localhost:4242/payment_items",
    cancel:"http://localhost:4242/payment_items"
  },  {
    items:[
      {
        "item":"test",
        "itemInfo":"tesing",
        "price":null,
        "amount":2
      }
    ],
    success:"http://localhost:4242/payment_items",
    cancel:"http://localhost:4242/payment_items"
  },  {
    items:[
      {
        "item":"test",
        "itemInfo":"tesing",
        "price":10,
        "amount":null
      }
    ],
    success:"http://localhost:4242/payment_items",
    cancel:"http://localhost:4242/payment_items"
  }
]

const subscriptionError = [
  {
    idPrice:"",
    success:"http://localhost:4242/succes_payment",
    cancel:"http://localhost:4242/cancel_payment"
  },
  {
    idPrice:"price_1PfWjpCPAgcnoLpT4MqJC8cl",
    success:"",
    cancel:"http://localhost:4242/cancel_payment"
  },
  {
    idPrice:"price_1PfWjpCPAgcnoLpT4MqJC8cl",
    success:"http://localhost:4242/succes_payment",
    cancel:""
  },
  {

  }
]

describe('POST /payment_subscription',()=>{
  describe('cuando se realiza un pago por subscripcion',()=>{
    test('el estado de la peticion debe ser 200',async()=>{
      const response = await request(app).post('/payment_subscription').send(subscription);
      expect(response.status).toBe(200);
    });
    test('el cuerpo de la respuesta debe tener el valor url',async()=>{
      const response = await request(app).post('/payment_subscription').send(subscription);
      expect(response.body.url).toBeDefined();
    });
  });
  describe('cuando el cuerpo de la peticion esta vacio o imcompleto',()=>{
    for(const iter of itemsError){
      test('el estado de la peticion deberia ser 400',async()=>{
        const response = await request(app).post('/payment_subscription').send(iter);
        expect(response.status).toBe(400);
      });
    }
  });
});

describe('POST /payment_items',()=>{
  describe('cuando se realiza una peticion para pagar un item',()=>{
    test('el estado de la peticion deberia ser 200',async()=>{
      const response = await request(app).post('/payment_items').send(item);
      expect(response.status).toBe(200);
    });
    test('el cuerpo de la respuesta deberia tener el valor url',async()=>{
      const response = await request(app).post('/payment_items').send(item);
      expect(response.body.url).toBeDefined();
    });
  });
  describe('cuando el cuerpo de la peticion esta imclopeto o vacio',()=>{
    for(const iter of subscriptionError){
      test('la peticion deberia responder con un codigo de estado 400',async()=>{
        const response = await request(app).post('/payment_items').send(iter);
        expect(response.status).toBe(400);
      });
    }
  });
});


afterAll(()=>{
  server.close();
});