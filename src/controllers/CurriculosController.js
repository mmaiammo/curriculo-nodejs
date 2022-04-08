const Curriculos = require("../models/CurriculosData");
module.exports = {
  async read(request, response) {
    const curriculosList = await Curriculos.find();
    return response.json(curriculosList);
  },

  create(request, response) {
    const { texto, categoria } = request.body;
    console.log(texto);
  },
};
