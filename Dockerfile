#BULDER
FROM node:20.18.0-alpine3.20 as builder

COPY ./src /app
COPY package.json /app/package.json

WORKDIR /app

RUN npm install


RUN apk add bash
RUN npm install pm2 -g


ENTRYPOINT ["pm2-runtime", "start", "index.js"]
