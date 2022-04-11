
const Competencias = require('../models/CompetenciasModel');
module.exports = {
  async read(request, response) {
    const competenciaList = await Competencias.find();
    return response.json(competenciaList);
  },

  create(request, response) {
    const { texto, categoria } = request.body;
    console.log(texto);
  },
};
