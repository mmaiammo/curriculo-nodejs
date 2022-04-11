const curriculoModel = require("../models/Curriculo");

module.exports = {
  // Todos
  async findAll(req, res) {
    try {
      const curriculo = await curriculoModel.find();
      res.status(200).json(curriculo);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  // Somente 1
  async findOne(req, res) {
    try {
      const curriculo = await curriculoModel.findById(req.params.id);
      res.status(200).json(curriculo);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  // Cria
  async create(req, res) {
    if (!req.body.nome && !req.body.objetivo && !req.body.cargo) {
      res.status(400).send({ message: "Nenhum curriculo foi informado!" });
    }

    const curriculo = new CurriculoModel({
      nome: req.body.nome,
      objetivo: req.body.objetivo,
      cargo: req.body.cargo,
    });

    await user
      .save()
      .then((data) => {
        res.send({
          message: "Curriculo Criado!!",
          user: data,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Não foi possível criar o currículo.",
        });
      });
  },

  // Atualiza
  async update(req, res) {
    if (!req.body) {
      res.status(400).send({
        message: "Nenhum dado informado!",
      });
    }
    const id = req.params.id;

    await UserModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Curriculo não encontrado.`,
          });
        } else {
          res.send({ message: "Atualizado." });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message,
        });
      });
  },

  // Delete
  async destroy(req, res) {
    await CurriculoModel.findByIdAndRemove(req.params.id)
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Curriculo não encontrado.`,
          });
        } else {
          res.send({
            message: "Deletado!",
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message,
        });
      });
  },
};
