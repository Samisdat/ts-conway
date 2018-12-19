FROM node:8.14.0-alpine
MAINTAINER Samisdat bastian@pertz.eu

RUN mkdir -p /tmp/conway

WORKDIR /tmp/conway

COPY package.json .

RUN npm install -g grunt-cli
RUN npm install

RUN mkdir -p /home/conway

mv /tmp/conway/node_modules /home/conway/
mv /tmp/conway/package.json /home/conway/

WORKDIR /home/conway

COPY grunt/ grunt
COPY src/ src
COPY typescript/ typescript

COPY .eslintignore .
COPY .eslintrc .
COPY Gruntfile.js .
COPY last-change.txt .
COPY tsconfig.json .
COPY tsdoc.json .
COPY tslint.json .

CMD ["tail", "-f" , "/dev/null"]

EXPOSE 80
