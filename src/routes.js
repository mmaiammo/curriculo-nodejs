const express = require("express");
const routes = express.Router();
const CompetenciasController = require("./controllers/CompetenciasController");
const CurriculosController = require("./controllers/CurriculosController");

routes.get("/competencias", CompetenciasController.read);
routes.post('/competencias', CompetenciasController.create);

routes.get("/Curriculos", CurriculosController.read)
routes.post("/Curriculos", CurriculosController.create)

module.exports = routes;