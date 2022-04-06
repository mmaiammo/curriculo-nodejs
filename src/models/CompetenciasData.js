const mongoose = require("mongoose");

const CompetenciasDataSchema = new mongoose.Schema({
    texto: String,
    categoria: String,
    nivel: Number,
});

module.exports = mongoose.model("competencias", CompetenciasDataSchema);