FROM dadhx05.interno:9092/oidigital/centos-node8
MAINTAINER diogo.leitao@oi.net.br

USER root

# configure npm on nexus cache repository
RUN npm config set registry http://dadhx05.interno:8081/repository/npm-group/

# set default workdir
RUN mkdir -p /usr/src/minhaoi-consumo-backend
WORKDIR /usr/src/minhaoi-consumo-backend

# install app dependencies
COPY package.json /usr/src/minhaoi-consumo-backend/
RUN if $http_proxy; then npm config set proxy=$http_proxy; fi
RUN if $http_proxy; then npm config set https-proxy=$http_proxy; fi
RUN if $http_proxy; then npm config set strict_ssl false; fi
RUN npm install

# bundle app source
COPY . /usr/src/minhaoi-consumo-backend/

RUN mkdir -p /usr/src/minhaoi-consumo-backend/test/reports && chown -R app:appgrp /usr/src/minhaoi-consumo-backend/

USER app

# expose app port and run
EXPOSE 8090

CMD ["node", "app"]