FROM node:8.10.0-alpine

RUN mkdir /app
WORKDIR /app

EXPOSE 3003

ADD dist /app/dist
ADD package.json /app/package.json

RUN npm install --production && npm install --global pm2

CMD ["pm2-docker", "start", "dist/app.js", "--instances", "1"]
