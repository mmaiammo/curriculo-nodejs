const express = require("express");
const routes = express.Router();
const CompetenciasController = require("./controllers/CompetenciasController");

routes.get("/competencias", CompetenciasController.read);
routes.post('/competencias', CompetenciasController.create);

module.exports = routes;