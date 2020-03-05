<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Este é um exemplo de API com operações CRUD para manipular dados de supermercados, neste projeto nós utilizamos o Framework TypeScript [Nestjs](https://github.com/nestjs/nest) e o [MongoDB](https://www.mongodb.com/).

## Prerequisites
Node.js 11.9.0
NPM 6.5.0
MongoDB

## Getting started
Clone this repo to your local machine using https://github.com/Mechanix-Ufscar/web-api.git
Antes de começar, no terminal de comando verifique as versãos instaladas do Node.js e NPM
```bash
$ node --version
$ npm --version
```

Altere o arquivo .env com as configurações do MongoDB que está sendo executado em sua maquina, exemplo:
DB_HOST=localhost
DB_PORT=27017
DB_NAME=marcoo

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

O server está rodando corretamente, se no terminal for exibido o log conforme exemplo:
[Nest] 12028   - 2020-03-05 19:14:23   [NestFactory] Starting Nest application...
[Nest] 12028   - 2020-03-05 19:14:23   [InstanceLoader] AppModule dependencies initialized +127ms
[Nest] 12028   - 2020-03-05 19:14:23   [InstanceLoader] MongooseModule dependencies initialized +2ms
[Nest] 12028   - 2020-03-05 19:14:23   [InstanceLoader] MongooseCoreModule dependencies initialized +94ms
[Nest] 12028   - 2020-03-05 19:14:23   [InstanceLoader] MongooseModule dependencies initialized +5ms
[Nest] 12028   - 2020-03-05 19:14:23   [InstanceLoader] SupermarketModule dependencies initialized +3ms
[Nest] 12028   - 2020-03-05 19:14:23   [RoutesResolver] SupermarketController {/supermarkets}: +31ms
[Nest] 12028   - 2020-03-05 19:14:23   [RouterExplorer] Mapped {/, GET} route +10ms
[Nest] 12028   - 2020-03-05 19:14:23   [RouterExplorer] Mapped {/:id, GET} route +17ms
[Nest] 12028   - 2020-03-05 19:14:23   [RouterExplorer] Mapped {/, POST} route +12ms
[Nest] 12028   - 2020-03-05 19:14:23   [RouterExplorer] Mapped {/:id, PUT} route +3ms
[Nest] 12028   - 2020-03-05 19:14:23   [RouterExplorer] Mapped {/:id, DELETE} route +7ms
[Nest] 12028   - 2020-03-05 19:14:23   [NestApplication] Nest application successfully started +9ms

## Example CRUD Operations
Create a Supermarket

Get All Supermarkets

Get Supermarket by id

Update Supermarket

Delete Supermarket

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Authors
[Wellington Dias](https://github.com/wellgdias) - Developer
César Sartori - Scrum Master

