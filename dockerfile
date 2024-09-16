FROM node:18-alpine

WORKDIR /microservice-app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD [ "node", "dist/index.js" ]