# Encurtador de URLs

Este é um projeto de encurtamento de URLs construído utilizando Node.js, implementado como uma API REST. O sistema oferece recursos de cadastro de usuários, autenticação, encurtamento de URLs, gerenciamento de URLs encurtadas por usuários autenticados, contabilização de acessos, entre outros.

## Estrutura do Banco de Dados

O sistema utiliza um banco de dados relacional PostgreSQL para armazenar as informações.

**Tabelas Principais:**

-   `users`: Armazena informações de usuários registrados.
-   `urls`: Mantém as URLs encurtadas e suas informações associadas.

## Autenticação

O sistema possui endpoints para autenticação de e-mail e senha, que retornam um Bearer Token através o JWT. Este token é utilizado para realizar operações autenticadas.

## Encurtamento de URLs

Existe um endpoint para encurtar URLs, que pode ser acessado com ou sem autenticação. O URL encurtado, incluindo o domínio, é retornado como resposta.
Exemplo:
-  Entrada:
https://teddy360.com.br/material/marco-legal-das-garantias-sancionado-ent
enda-o-que-muda/
- Saída: http://localhost/aZbKq7

## Para rodar o projeto

```bash

docker compose up

```
## Tecnologias usadas

### Jwt (JSON Web Token) 

-- É uma forma popular de obter tokens de autenticação para proteger e autorizar acesso a recursos na web. Um dos motivos pela escolha do jwt, foi pelo fato de ser uma forma segura de transmitir informações de autenticação e autorização entre diferentes sistemas ou serviços na web. Ele usa uma assinatura digital para verificar a autenticidade do token, o que significa que é difícil para um invasor falsificar um token JWT.

### Bcrypt

-- O bcrypt é uma biblioteca usada para criptografar senhas de forma segura. Ele torna o processo de hash de senhas mais lento, o que dificulta a tentativa de adivinhar senhas por meio de tentativa e erro.

### Docker compose

-- Facilita a criação, implantação e execução de aplicativos em contêineres.

### Fastify

-- Fastify é um framework web para Node.js projetado para ser extremamente eficiente e rápido. Ele se destaca por ser leve, modular e fácil de usar, fornecendo um desempenho excepcional para a construção de aplicativos web e APIs.

### Prisma

-- Prisma é uma camada de acesso a dados (Data Access Layer) moderna para Node.js e TypeScript que facilita a interação com bancos de dados relacionais.

### Dotenv

-- Módulo usado para carregar as variáveis de ambiente.


