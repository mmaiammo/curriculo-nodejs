
const Competencias = require('../models/CompetenciasData');
module.exports = {
  async read(request, response) {
    // const competenciaList = await Competencias.find();
    return response.json({ "competenciaList": "teste" });
  },

  create(request, response) {
    const { texto, categoria } = request.body;
    console.log(texto);
  },
};
