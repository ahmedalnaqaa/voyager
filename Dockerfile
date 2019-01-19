FROM node:latest

RUN mkdir /app
WORKDIR /app
COPY package.json /app/
RUN npm install
CMD [ "NODE_ENV=docker npm", "start" ]