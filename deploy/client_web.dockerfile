FROM node:8.9.0

WORKDIR /sport_radar_integration/client_web
COPY . .

RUN npm install -g webpack webpack-dev-server

RUN npm install

EXPOSE 1324 1324

