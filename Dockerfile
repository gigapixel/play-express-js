FROM node:8.10.0-alpine

RUN mkdir /app
WORKDIR /app

COPY dist /app/dist
COPY node_modules /app/node_modules
COPY package.json /app/package.json

RUN npm install -g pm2

CMD ["pm2-docker", "start", "dist/app.js", "--instances", "1"]

EXPOSE 3003