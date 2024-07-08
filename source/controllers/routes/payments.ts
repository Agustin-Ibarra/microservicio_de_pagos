import { Request, Response } from "express";
import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();
const stripe = new Stripe(`${process.env.PRIVATE_KEY}`);

/**
 * esta peticion crea una sesion de stripe para poder concretar el pago de los productos
 * @param {object} req 
 * @param {object} res 
 * @returns {void}
 */
export const paymentForItems = async function(req:Request,res:Response):Promise<void>{
  const arrayItems: object[] = [];
  const itemsData = req.body.items;
  if(Array.isArray(itemsData)){
    itemsData.forEach(element => {
      const itemsToPay:Object = {
        price_data:{
          product_data:{            
            name:element.item,
            description:element.itemInfo
          },
          currency:"usd",
          unit_amount: Math.round(element.price*100)
        },
        quantity:element.amount
      }
      arrayItems.push(itemsToPay)
    });
  }
  const session = await stripe.checkout.sessions.create({
    line_items:arrayItems,
    mode:"payment",
    success_url:req.body.success,
    cancel_url:req.body.cancel
  });
  res.send(session.url);
}