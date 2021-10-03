<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# 🚀 Executando o projeto
Antes de tudo, é necessário criar um arquivo ```.env``` no diretório raiz do projeto, seguindo a mesma estrutura do [arquivo .env.example](/.env.example), que também se encontra no diretório raiz.

Após criar o arquivo e preencher os dados necessários, é hora de instalar as dependências.

## Installation

```bash
$ npm install
```
ou
```
$ yarn
```

## Running the app

```bash
# development
$ npm run start
$ yarn start

# watch mode
$ npm run start:dev
$ yarn start:dev

# production mode
$ npm run start:prod
$ yarn start:prod
```

---
### ✅ **GET** ```/films```

Procura todos os Filmes cadastrados.

Exemplo de resposta:
```json
[
  {
    "id": 31,
    "name": "alo",
    "imagem": null,
    "release_date": " 22/08/2021",
    "duration": "2",
    "genre": [
      {
        "id": 4,
        "movie_genre": "ação"
      },
      {
        "id": 2,
        "movie_genre": "comedia"
      },
      {
        "id": 3,
        "movie_genre": "suspense"
      }
    ],
    "participants": [
      {
        "id": 1,
        "name": "guilherme",
        "imagem": "http://img.com.br/guilherme",
        "birth_date": "22/08/1994",
        "role": "ACTOR"
      },
      {
        "id": 2,
        "name": "isa",
        "imagem": "http://img.com.br/isa",
        "birth_date": "22/08/1900",
        "role": "STAFF"
      }
    ]
  }
]
```

---
### ✅ **POST** ```/films```

Cria um Filme e faz a relação com Genêro e Participantes.

Parâmetros obrigatórios e opcionais? no corpo da requisição:

- name: ```string``` | Nome do filme
- imagem? : ```string``` | Imagem do filme
- release_date: ```string``` | Data de lançamento do filme
- duration: ```string``` | Tempo de duração do filme
- movie_genre: ```string[]``` | nome dos Genêros do filme. (Os Genêneros estão disponiveis na rota GET /genres)
- participants: ```number[]``` | id dos Participantes do filme (Os Participantes do filme estão disponiveis na rota GET /participants)

Exemplo de requisição: 
```json
{
	"name": "O desespero de Jaba",
	"release_date":" 22/08/2021",
	"duration": "2",
	"movie_genre": ["suspense"],
	"participants": [1, 3, 2]
}
```

Exemplo de resposta:
```json
{
  "id": 34,
  "name": "O desespero de Jaba",
  "imagem": null,
  "release_date": " 22/08/2021",
  "duration": "2",
  "genre": [
    {
      "id": 3,
      "movie_genre": "suspense"
    }
  ],
  "participants": [
    {
      "id": 1,
      "name": "guilherme",
      "imagem": "http://img.com.br/guilherme",
      "birth_date": "22/08/1994",
      "role": "ACTOR"
    },
    {
      "id": 2,
      "name": "isa",
      "imagem": "http://img.com.br/isa",
      "birth_date": "22/08/1900",
      "role": "STAFF"
    }
  ]
}
```


### ✅ **PUT** ```/films/<id>```

Atualiza um Filme.

Parâmetros no corpo da requisição:

- name?: ```string``` | Nome do filme
- release_date?: ```string``` | Data de lançamento do filme
- duration?: ```string``` | Tempo de duração do filme

Exemplo de requisição: 
```json
{
	"imagem": "hhtp://teste.com/img_1.png",
	"duration": "6"
}
```

Exemplo de resposta:
```json
{
  "id": 24,
  "name": "O desespero de Jaba",
  "imagem": "hhtp://teste.com/img_1.png",
  "release_date": " 22/08/2021",
  "duration": "6"
}
```
### ✅ **DELETE** ```/films/<id>```

Deleta um Filme.
Exemplo de resposta:

```Status 204  ```


---
### ✅ **GET** ```/genres```

Procura todos os Genêros cadastrados.

Exemplo de resposta:
```json
[
  {
    "id": 4,
    "movie_genre": "ação"
  },
  {
    "id": 2,
    "movie_genre": "comedia"
  },
  {
    "id": 3,
    "movie_genre": "suspense"
  },
  {
    "id": 1,
    "movie_genre": "terror"
  }
]
```

---
### ✅ **POST** ```/genres```

Cria um Genêro de Filme.

Parâmetros obrigatórios no corpo da requisição:

- movie_genre: ```string``` | tipo do genêro.

Exemplo de requisição: 

```json
{
	"movie_genre": "ação"
}
```

Exemplo de resposta:
```json 
{
  "id": 4,
  "movie_genre": "ação"
}
```



### ✅ **PUT** ```/genres/<id>```

Atualiza um genêro.

Parâmetros no corpo da requisição:

- movie_genre?: ```string``` | Tipo do genêro

Exemplo de requisição: 
```json
{
	"movie_genre": "terror"
}
```

Exemplo de resposta:
```json
{
  "id": 1,
  "movie_genre": "terror"
}
```
### ✅ **DELETE** ```/genres/<id>```

Deleta um genêro.

Exemplo de resposta:

```Status 204  ```

---
### ✅ **GET** ```/participants```

Procura todos os Participantes cadastrados.

Exemplo de resposta:
```json
[
  {
    "id": 1,
    "name": "guilherme",
    "imagem": "http://img.com.br/guilherme",
    "birth_date": "22/08/1994",
    "role": "ACTOR"
  },
  {
    "id": 2,
    "name": "isa",
    "imagem": "http://img.com.br/isa",
    "birth_date": "22/08/1900",
    "role": "STAFF"
  }
]
```

---
### ✅ **POST** ```/participants```

Cria um participante, podendo ser [ ACTOR | STAFF ].

Parâmetros obrigatórios no corpo da requisição:

- name: ```string``` | Nome do participante
- imagem : ```string``` | Imagem do participante
- birth_date: ```string``` | Data de nascimento do participante
- role: ```enum [ ACTOR | STAFF ]``` | Tipo de participção.

Exemplo de requisição: 

```json
{
	"name": "isa",
	"imagem": "http://img.com.br/isa",
	"birth_date": "22/08/1900",
	"role": "STAFF"
}
```

Exemplo de resposta:
```json 
{
  "id": 3,
  "name": "isa",
  "imagem": "http://img.com.br/isa",
  "birth_date": "22/08/1900",
  "role": "STAFF"
}
```

### ✅ **PUT** ```/participants/<id>```

Atualiza um participant.

Parâmetros no corpo da requisição:

- name?: ```string``` | Nome do participante
- imagem? : ```string``` | Imagem do participante
- birth_date?: ```string``` | Data de nascimento do participante
- role?: ```enum [ ACTOR | STAFF ]``` | Tipo de participção.

Exemplo de requisição: 
```json
{
	"name": "rosemeire",
	"imagem": "imagem",
	"role": "STAFF"
}
```

Exemplo de resposta:
```json
{
  "id": 3,
  "name": "rosemeire",
  "imagem": "imagem",
  "birth_date": "22/08/1900",
  "role": "STAFF"
}

```
### ✅ **DELETE** ```/participants/<id>```

Deleta um participante.

Exemplo de resposta:

```Status 204  ```


## License

Nest is [MIT licensed](LICENSE).
