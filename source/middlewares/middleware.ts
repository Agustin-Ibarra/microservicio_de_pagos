import { NextFunction, Request, Response } from "express";

/**
 * verifica que el cuerpo de la peticion no esta vacia o en de un tipo de dato incorrecto para realizar pagos por uno o varios productos
 * @param  req 
 * @param  res 
 * @param  next 
 * @returns {void}
 */
export const checkItems = function(req:Request,res:Response,next:NextFunction): void{
  if(!req.body.items || !req.body.cancel || !req.body.success){
    res.status(400).send({error:"Empty data!"});
  }
  else{
    const arrayItems = req.body.items;
    let flag:boolean = true;
    if(Array.isArray(arrayItems)){
      arrayItems.forEach(element => {
        if(!element.item || typeof(element.item) !== 'string' || !element.itemInfo || typeof(element.itemInfo) !== 'string'){
          flag = false;
        }
        else if(!element.price ||typeof(element.price) !== "number" || !element.amount || typeof(element.amount) !== "number"){
          flag = false
        }
      });
      if(flag === true){
        next();
      }
      else{
        res.status(400).send({error:"The data is empty or is not of the expected data type!"});
      }
    }
    else{
      res.status(400).send({error:"The data is not of the expected data type!"});
    }
  }
}

/**
 * verifica que el cuerpo de la peticion no este vacio o sea de un tipo de dato incorrecto para realizar pagos por suscripcion
 * @param  req 
 * @param res 
 * @param next 
 * @returns {void}
 */
export const checkSubscriptionItem = function(req:Request,res:Response,next:NextFunction):void{
  if(!req.body.idPrice || !req.body.success || !req.body.cancel){
    res.status(400).send('Data incomplet!');
  }
  else{
    if(typeof(req.body.idPrice) !== 'string' || typeof(req.body.success) !== 'string' || typeof(req.body.cancel) !== 'string'){
      res.status(400).send('The data is not of the expected data type!')
    }
    else{next()}
  }
}