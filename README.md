# Bem-Vindo ao Afiliados API!

API do Afiliados é responsavel por normalizar arquivos txt e salvar no banco de dados.

[Github do Front-end do Afiliados](https://github.com/drmatheus/afiliados-app)

## Tecnologias Utilizadas 👨‍💻👨‍💻

Nesse projeto foi utilizado:

- [NodeJS](https://nodejs.org/en/)

- [TypeScript](https://www.typescriptlang.org/)

- [Express](https://expressjs.com/)

- [TypeORM](https://typeorm.io/)

- [Postgres](https://www.postgresql.org/)

## Arquitetura do Projeto

- config: Contém configurações extras, como a configuração do Multer, que é usado para lidar com o upload de arquivos.

- controllers: Responsável por conter os controladores que lidam com as requisições da API. Cada controlador é responsável por tratar uma rota específica.

- entities (do TypeORM): Contém as entidades do TypeORM, que representam os modelos de dados da aplicação e estão diretamente relacionadas às tabelas do banco de dados.

- interfaces: Contém as interfaces TypeScript que definem os tipos personalizados usados na aplicação para garantir tipagem estática e melhorar a legibilidade do código.

- middlewares: Armazena os middlewares personalizados, como autenticação e validação de dados, que são executados antes de chegar aos controladores.

- migrations (do TypeORM): Contém as migrações do TypeORM, que são responsáveis por criar e modificar as tabelas no banco de dados de acordo com as mudanças nos modelos de dados.

- routes: Contém as rotas da API definidas usando o Express, que direcionam as requisições HTTP aos controladores corretos.

- schemas (do Zod): Armazena os esquemas do Zod, que são usados para validar os dados de entrada das requisições antes de serem processados pelos controladores.

- services: Contém a lógica de negócios da aplicação, como operações de banco de dados e outras operações complexas, que não são diretamente relacionadas à camada de controle.

- upload: Diretório temporário para armazenar os arquivos enviados durante o upload antes de serem processados.

- app.ts: O ponto de entrada da aplicação, onde a instância do Express é criada e configurada, incluindo middlewares globais.

- data-source.ts: Responsável por inicializar a conexão com o banco de dados (TypeORM) e disponibilizar o DataSource para o resto da aplicação.

- error.ts: Gerencia o tratamento de erros da aplicação, como erros de validação e erros internos do servidor, garantindo respostas adequadas para os clientes.

- Server.ts: Responsável por inicializar o servidor Express e ouvir as requisições na porta definida.

- .env.example: Um arquivo modelo que contém variáveis de ambiente necessárias para a aplicação

## Rodando o Projeto

- Certifique-se de ter o Node.js e o PostgreSQL instalados.

- Inicie seu terminal (git bash ou powershell)

- Preencha as variaveis de ambiente:

```bash
 DATABASE_URL=postgres://<username>:<password>@<host>:<port>/<database>
 SECRET_KEY=<secret_key>
```

```bash
    npm install
```

- Para gerar as migrations necessarias:

  (ATENÇÃO: para evitar problemas no funcionamento do projeto garanta que a pasta migrations esteja vazia)

```bash
   npm run typeorm migration:generate ./src/migrations/InitialMigration -d ./src/data-source.ts
```

- Após gerar a migration, execute a migration com o seguinte comando:

```bash
   npm run typeorm migration:run -d ./src/data-source
```

- Para iniciar o projeto:

```bash
    npm run dev
```

- A api estará disponivel no endereço: [localhost:3000](https://localhost:3000) !

## Rodando o Projeto em Docker

- Certifique-se de ter o Docker instalado em seu sistema.

- No diretorio do projeto no terminal digite o comando:

```bash
    docker-compose up
```

(Substitua [nome_do_container] pelo nome ou ID do container onde o projeto está em execução.)

- Abra um novo terminal e execute o seguinte comando:

```bash
    docker exec -it [nome_do_container] bash
```

- Agora no terminal do container (no mesmo terminal):

```bash
npx typeorm-ts-node-commonjs "migration:run" -d "./src/data-source.ts"

```

- A api estará disponivel no endereço: [localhost:3000](https://localhost:3000)!

## ROTAS DA API

## ROTAS /user

O objeto users é definido como:

| Campo    | Tipo   | Descrição             |
| -------- | ------ | --------------------- |
| name     | string | O nome do usuario.    |
| email    | string | Email do usuario .    |
| password | string | A senha do usuario.   |

### Endpoints de usuarios

| Método | Rota  | Descrição                 |
| ------ | ----- | ------------------------- |
| POST   | users | Criação de um usuário.    |
| GET    | users | Retorna o usuario logado. |

### Criação de usuário

### CRIAR USUARIO

### Exemplo de Request:

```
POST /users
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "email": "johnmail@mail.com",
  "name": "john dummy",
  "password": "123456789"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "name": "john dummy",
  "email": "johnmail@mail.com",
  "id": "uuid"
}
```

### RETORNAR DADOS DO USUARIO LOGADO

### Exemplo de Request:

```
GET /users
Host: http://localhost:3000
Authorization: Bearer token (token de login)
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
	"name": "Matheus Davila",
	"email": "davilanew@mail.com",
	"id": "0fd0dfc3-8d07-47c0-8401-38fde077036e",
	"affiliatedOperations": [
		{
			"type": "1",
			"date": "2022-01-15T19:20:30-03:00",
			"product": "CURSO DE BEM-ESTAR",
			"value": "0000012750",
			"seller": "JOSE CARLOS",
			"id": "b1427733-67bf-4d9c-8f7a-d973d0f5ba7b"
		}...]}
```

## ROTAS DE LOGIN

O objeto login é definido como:

| Campo    | Tipo   | Descrição            |
| -------- | ------ | -------------------- |
| email    | string | O email do usuário.  |
| password | string | password do usuario. |

### Endpoints de login

| Método | Rota  | Descrição            |
| ------ | ----- | -------------------- |
| POST   | login | login de um usuário. |

### REALIZAR LOGIN

### Exemplo de Request:

```
POST /login
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "email": "johndoe@mail.com",
  "password": "123456789"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTA3NzUxMDksImV4cCI6MTY5MDg2MTUwOSwic3ViIjoiMGZkMGRmYzMtOGQwNy00N2MwLTg0MDEtMzhmZGUwNzcwMzZlIn0.nO06vZBlShzyBmYWYBJDWosN26MH0yUme82hLjf9Hbs"
}
```

## ROTAS DE OPERAÇÕES DOS AFILIADOS

O objeto de operação é definido como:

- Num arquivo .txt cada linha deve ser composta da seguinte forma:

12022-01-15T19:20:30-03:00CURSO DE BEM-ESTAR 0000012750JOSE CARLOS

Os dados estão organizados da seguinte forma:
|Campo | Inicio | Fim | Descrição |
|-----------------|----------|-------|-----------------------|
|Tipo de operação |1 |1 | Entrada/Saida |
|Data |2 |26 | Data - ISO Date + GMT |
|Produto |27 |56 | Nome do produto |
|Valor |57 |66 | Valor em centavos |
|Vendedor |67 |86 | Nome do vendedor |

### Endpoint para postar as operações dos afiliados

| Método | Rota        | Descrição           |
| ------ | ----------- | ------------------- |
| POST   | /affiliated | Postar as operações |
| GET    | /affiliated | Listar as operações |

### POST DAS OPERAÇÕES DOS AFILIADOS

### Exemplo de Request:

```
POST /affiliated
Host: http://localhost:3000
Authorization: Bearer <seu-token-de-autenticação>
Content-type: multipart/form-data
```

### Corpo da Requisição:

```json
Para enviar o arquivo .txt contendo as operações, você deve usar o campo "file" no corpo da requisição. Certifique-se de utilizar o formato adequado para o envio do arquivo.
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "type": "1",
    "date": "2022-01-15T19:20:30-03:00",
    "product": "CURSO DE BEM-ESTAR",
    "value": "0000012750",
    "seller": "JOSE CARLOS",
    "id": "b1427733-67bf-4d9c-8f7a-d973d0f5ba7b"
  },
  {
    "type": "1",
    "date": "2021-12-03T11:46:02-03:00",
    "product": "DOMINANDO INVESTIMENTOS",
    "value": "0000050000",
    "seller": "MARIA CANDIDA",
    "id": "6b740f0b-8da7-4923-8de7-b69464acac21"
  }
]
```

### GET DAS OPERAÇÕES DOS AFILIADOS

### Exemplo de Request:

```
POST /affiliated
Host: http://localhost:3000
Authorization: Bearer <seu-token-de-autenticação>
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "type": "1",
    "date": "2022-01-15T19:20:30-03:00",
    "product": "CURSO DE BEM-ESTAR",
    "value": "0000012750",
    "seller": "JOSE CARLOS",
    "id": "b1427733-67bf-4d9c-8f7a-d973d0f5ba7b"
  },
  {
    "type": "1",
    "date": "2021-12-03T11:46:02-03:00",
    "product": "DOMINANDO INVESTIMENTOS",
    "value": "0000050000",
    "seller": "MARIA CANDIDA",
    "id": "6b740f0b-8da7-4923-8de7-b69464acac21"
  }
]
```

## MADE WITH ❤️ BY:

- [Matheus Dávila](https://github.com/drmatheus)
