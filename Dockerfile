FROM node:latest

RUN mkdir /app
WORKDIR /app
COPY package.json /app/
RUN npm install
ARG PORT=3000
CMD [ "npm", "start" ]