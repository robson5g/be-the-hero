const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 *rotas / recurso
 */

/**
 * Metodos HTTP:
 *
 * GET: Buscar/listar informacao do back-end
 * POST: Criar uma informacoa no back-end
 * PUT: Alterar uma informacao no back-end
 * DELETE: Deletar uma imformacao no back-end
 *
 * Tipos de parametros
 *
 * Query Params: Parametros nomeados enviados na rota apos "?" (filtro, paginacao)
 * Route Parms: Parametros utilizados para idetnficar recursos
 * Request Bory: Corpo da requsicao, utilizado para criar ou alterar recursos
 *
 * SQL: MySQL, SQlite, PostgreSQL, Oracle, Microsoft SQL server
 * NoSQL: MongoDB, CouchDB, etc.
 *
 * Driver: SELECT * FROM users
 * Query builder: table("users").select("*").where()
 *
 */

app.listen(3333);
