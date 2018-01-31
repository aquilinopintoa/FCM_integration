FROM golang:1.8

RUN curl https://glide.sh/get | sh

WORKDIR $GOPATH/src/fcm_integration

RUN apt-get update && apt-get install -y inotify-tools
RUN glide cc
 
EXPOSE 1323 1323