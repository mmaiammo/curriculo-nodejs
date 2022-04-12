/* -- Referências
// ----------------------------- */
const express = require("express");
const routes = express.Router();
// const express = require('express')
// const UserController = require('../controllers/User')
// const router = express.Router();
/* -- Controllers
// ----------------------------- */
const CurriculosController = require("./controllers/CurriculoController");

/* -- Routes
// ----------------------------- */

//-- 01. Curriculo
// routes.get("/curriculos", CurriculosController.read);

routes.get("/curriculo", CurriculosController.findAll);
routes.get("/curriculo/<id>", CurriculosController.findOne);
// routes.post("/curriculo", CurriculosController.create);
// routes.patch("/curriculo/:id", CurriculosController.update);
// routes.delete("/curriculo/:id", CurriculosController.destroy);

//-- Exports
module.exports = routes;
