const mongoose = require("mongoose");

const CurriculosDataSchema = new mongoose.Schema({
  nome: String,
  objetivo: String,
  cargo: String,  
});

module.exports = mongoose.model("curriculos", CurriculosDataSchema);


