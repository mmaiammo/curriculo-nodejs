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
// router.get("/curriculos/:id", CurriculosController.findOne);
// router.post("/curriculos", CurriculosController.create);
// router.patch("/curriculos/:id", CurriculosController.update);
// router.delete("/curriculos/:id", CurriculosController.destroy);

//-- Exports
module.exports = routes;
