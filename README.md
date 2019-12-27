# Adonis API application

A API em AdonisJs já vem com algumas pré-configurações:

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Para utilizar a CLI do Adonis caso não tenha, basta instala-lá localmente.

```bash
npm install -g @adonisjs/cli
```

Use o comando abaixo para instalar as dependencias;

```bash
npm install
```

Edite o arquivo .env caso já exista, ou crie e edite caso não exista. Insira as informações do banco de dados no arquivo .env, como tipo de bd, user, password e nome da database;

```bash
HOST=127.0.0.1
PORT=3333
NODE_ENV=development
APP_NAME=AdonisJs
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=rNKVL07b9bigMTIfyCRDIjfgTI8LVt4x
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=irriga
HASH_DRIVER=bcrypt
```

Utilize o comando `adonis serve --dev` para rodar o aplicativo criado. 

```bash
adonis serve --dev
```

Para rodar o script de inserção de dados Dark Sky na API basta rodar `node darksky.js`. 

```bash
node darksky.js
```
