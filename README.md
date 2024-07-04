# My App

## Configuração

### Requisitos

- Node.js
- npm
- Docker (opcional)

### Instalação

1. Clone o repositório:

```sh
git clone https://github.com/seu-usuario/nome-do-repositorio.git

## Estrutura do Projeto

- `src/components`: Componentes React.
- `src/styles`: Estilos CSS.
- `db.json`: Banco de dados do json-server.
- `Dockerfile`: Arquivo de configuração do Docker.

##### Desenvolver CRUD RESTful API para a Entidade "Noticia"
#### Instalar json-server

npm install -g json-server
#### Criar arquivo db.json
#### Iniciar o json-server
json-server --watch db.json --port 3001
## http://localhost:3001 com suporte CRUD para a entidade "Noticia".
### Endpoints
GET /api/noticias: Lista todas as notícias
POST /api/noticias: Cria uma nova notícia
PUT /api/noticias/:id: Atualiza uma notícia existente
DELETE /api/noticias/:id: Remove uma notícia

