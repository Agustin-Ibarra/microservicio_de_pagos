import winston from 'winston';
import nodeCron from 'node-cron';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv'

dotenv.config();

const _dirname = path.resolve();

const logFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.printf(info => {
    return `${info.timestamp} [${info.level.toUpperCase()}] ${info.message}`;
  })
);

const sendLogs = async function(){
  const trasnporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
      user:process.env.DELIVERY,
      pass:process.env.PASSKEY
    }
  });
  const mailOptions = {
    from:process.env.DELIVERY,
    to:process.env.RECEIVER,
    subject:'Microsrvice payments requests failed',
    attachments:[{
      filname:'errors.log',
      path:path.join(_dirname,'app/source/monitoring/logs/errors.log')
    }]
  };
  try{
    const info = await trasnporter.sendMail(mailOptions);
    return info;
  }
  catch(error){
    console.log(error);
  }
}

export const cronJob = nodeCron.schedule('0 6 * * *',()=>{
  if(fs.readFileSync(path.join(_dirname,'app/source/monitoring/logs/errors.log'),'utf-8').length > 0){
    sendLogs();
    fs.writeFileSync(path.join(_dirname,'app/source/monitoring/logs/errors.log'),'');
  }
});

const logger = winston.createLogger({
  level: 'info',
  format:logFormat,
  transports: [
    new winston.transports.Console({
      format:winston.format.combine(
        logFormat,
        winston.format.colorize({all:true})
      )
    }),

    new winston.transports.File({
      filename: 'app/source/monitoring/logs/errors.log',
      level: 'warn',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      )
    })
  ]
});

export default logger;
