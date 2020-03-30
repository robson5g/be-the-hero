//Importando o express para pegar o "routes"
const express = require("express");

//Importanto os Controllers
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

//Usando o metodo "routes" do express
const routes = express.Router();
// Os dados de 3333/ongs GET os dados de index
// Os dados de 3333/ongs POST em OngController.create

routes.post("/sessions", SessionController.create);
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfileController.index);
// Os dados de 3333/ongs GET os dados de index
// Os dados de 3333/incidents POST em IncidentControler
routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;
