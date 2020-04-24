FROM node:14.0.0-alpine3.11
MAINTAINER Samisdat bastian@pertz.eu

# HTTP Proxy with local default as arg
ARG HTTP_PROXY=http://139.7.95.74:8080
# HTTP as env (overwritable on container start)
ENV HTTP_PROXY ${HTTP_PROXY}
ENV HTTPS_PROXY ${HTTP_PROXY}
ENV http_proxy ${HTTP_PROXY}
ENV https_proxy ${HTTP_PROXY}

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

COPY tsconfig.json .
COPY tslint.json .

CMD ["npm" , "run", "build"]

EXPOSE 8080
