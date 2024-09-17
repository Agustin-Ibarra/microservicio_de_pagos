FROM node:18-alpine

ENV DIR=/app

WORKDIR ${DIR}

COPY package*.json tsconfig.json ${DIR}

RUN npm install

COPY ./source ${DIR}/source

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]