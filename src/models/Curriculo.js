const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  nome: String,
  objetivo: String,
  cargo: String, 

});
var curriculo = new mongoose.model("Curriculo", schema);
// module.exports = mongoose.model("curriculo", CurriculoDataSchema);
module.exports = curriculo; 

