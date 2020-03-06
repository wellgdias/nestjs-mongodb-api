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
</p> 

## Descrição
Este é um exemplo de API para manipular dados de supermercados, neste projeto foi utilizado o Framework TypeScript [Nestjs](https://github.com/nestjs/nest) e o [MongoDB](https://www.mongodb.com/).

## Pré-requisitos
Node.js 11.9.0
NPM 6.5.0
MongoDB

## Início
Realize o Clone deste repositório para a sua maquina uitlizando o endereço https://github.com/wellgdias/nestjs-mongodb-api
Antes de iniciar, no Prompt de Comando verifique as versões instaladas do Node.js e NPM.
```bash
$ node --version
$ npm --version
```
Na pasta do projeto altere o arquivo .env com as configurações do MongoDB que está sendo executado em sua maquina, substitua os valores conforme exemplo:
````
DB_HOST=localhost
DB_PORT=27017
DB_NAME=marcoo
````

## Instalação
Execute o seguinte comando para instalar todas as dependências deste projeto
```bash
$ npm install
```

## Executando a aplicação
Para iniciar a aplicação, você pode executar os seguintes comandos
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

O server está rodando corretamente, se no terminal for exibido o seguinte log conforme exemplo:
```
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
```

## Exemplos de uso da API
A API está trabalhando somente com a modelagem de supermercado, porém para criar outras entidades será utilizado o mesmo padrão de projeto.

O modelo de Supermercado segue o seguinte Schema
```ts
{
    name: String,
    address: String,
    phone: String,
    latitude: Number,
    longitude: Number,
}
```
A aplicação deverá estar sendo executada, o caminho padrão é http://localhost:3000/supermarkets
### POST
Para inserir um registro, execute o seguinte comando
```
POST /supermarkets
```
Enviando o JSON 
```json
  {
    "name": "Assaí Atacadista",
    "address": "Rodovia Raposo Tavares, KM 99 - Vila Artura, Sorocaba - SP, 18023-000",
    "phone": "(15) 3388-3006",
    "latitude": null,
    "longitude": null
  }
```

### GET
Para buscar todos os supermercados, execute o seguinte comando
```
GET /supermarkets
```
Será retornado um JSON com todos os supermercados cadastrados, exemplo
```json
[
  {
    "_id": "5e60e36a3ba8d00c50baa132",
    "name": "Hipermercado Extra - Campolim",
    "address": "R. Maria Aparecida Pessutti Milego, 250 - Parque Campolim, Sorocaba - SP, 18048-140",
    "phone": "(15) 3234-9300",
    "latitude": 1,
    "longitude": 2,
    "__v": 0
  },
  {
    "_id": "5e6177ce27096513948278e8",
    "name": "Assaí Atacadista",
    "address": "Rodovia Raposo Tavares, KM 99 - Vila Artura, Sorocaba - SP, 18023-000",
    "phone": "(15) 3388-3006",
    "latitude": null,
    "longitude": null,
    "__v": 0
  }
]
```
### GET ById
Para buscar um supermercado específico, execute o seguinte comando substituindo o <id> pelo id cadastrado no seu banco
```
GET /supermarkets/<id>
```
Será retornado um JSON com o supermercado do <id> informado, exemplo http://localhost:3000/supermarkets/5e60e36a3ba8d00c50baa132
```json
{
  "_id": "5e60e36a3ba8d00c50baa132",
  "name": "Hipermercado Extra - Campolim",
  "address": "R. Maria Aparecida Pessutti Milego, 250 - Parque Campolim, Sorocaba - SP, 18048-140",
  "phone": "(15) 3234-9300",
  "latitude": 1,
  "longitude": 2,
  "__v": 0
}
```
### UPDATE
Para alterar qualquer informação de um supermercado que esteja cadastrado, execute o seguinte comando substituindo o <id> pelo id cadastrado no seu banco
```
PUT /supermarkets/<id>
```
Enviando o JSON com os dados alterados do supermercado
```json
{
  "name": "Hipermercado Extra",
  "address": "R. Maria Aparecida Pessutti Milego, 250 - Parque Campolim, Sorocaba - SP, 18048-140",
  "phone": "(15) 3234-9300",
  "latitude": 2,
  "longitude": 1 
}
```
Será retornado um JSON com os dados do supermercado que foi alterado
```json
{
  "_id": "5e61b93db273d4198869d090",
  "name": "Hipermercado Extra",
  "address": "R. Maria Aparecida Pessutti Milego, 250 - Parque Campolim, Sorocaba - SP, 18048-140",
  "phone": "(15) 3234-9300",
  "latitude": 2,
  "longitude": 1,
  "__v": 0
}
```

### DELETE
Para excluir um supermercado, execute o seguinte comando substituindo o <id> pelo id cadastrado no seu banco
```
DELETE /supermarkets/<id>
```
Será retonado um JSON informando que a exlcusão ocorreu com sucesso e exibido a quantidade de registros excluídos
```json
{
  "n": 1,
  "ok": 1,
  "deletedCount": 1
}
```



