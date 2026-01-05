FROM node:25-alpine

WORKDIR /app

COPY . .

CMD [ "node", "index.js" ]