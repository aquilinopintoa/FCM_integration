FROM node:8.9.0

WORKDIR /fcm_integration/client
COPY . .

RUN npm install -g webpack webpack-dev-server

RUN npm install

EXPOSE 1324 1324

