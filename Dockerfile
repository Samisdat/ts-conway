FROM node:14.0.0-alpine3.11
MAINTAINER Samisdat bastian@pertz.eu

RUN apk add --no-cache \
    build-base \
    g++ \
    cairo-dev \
    jpeg-dev \
    pango-dev \
    giflib-dev

RUN mkdir -p /tmp/conway

WORKDIR /tmp/conway

COPY package.json .

RUN npm install

RUN mkdir -p /home/conway

RUN mv /tmp/conway/node_modules /home/conway/
RUN mv /tmp/conway/package.json /home/conway/

WORKDIR /home/conway

COPY src/ src
COPY typescript/ typescript

COPY jest.config.js .
COPY tsconfig.json .
COPY tslint.json .
COPY jest-serialize-conway.js .

CMD ["npm" , "run", "build"]

EXPOSE 8080
