import winston from 'winston';

const logFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.printf(info => {
    return `${info.timestamp} [${info.level.toUpperCase()}] ${info.message}`;
  })
)

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
      level: 'error',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
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
