const express = require("express");
const CurriculoController = require("../controllers/CurriculoController");
const router = express.Router();

router.get("/", CurriculoController.findAll);
router.get("/:id", CurriculoController.findOne);
router.post("/", CurriculoController.create);
router.patch("/:id", CurriculoController.update);
router.delete("/:id", CurriculoController.destroy);

module.exports = router;
