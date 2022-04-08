const mongoose = require("mongoose");

const CompetenciasDataSchema = new mongoose.Schema({
    texto: String,
    categoria: String,
});

module.exports = mongoose.model("competencias", CompetenciasDataSchema);