const CurriculoModel = require("../models/curriculo.model");

// Retrieve all users from the database.
exports.findAll = async (req, res) => {
    try {
    const curriculo = await CurriculoModel.find();
    res.status(200).json(curriculo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Find a single User with an id
exports.findOne = async (req, res) => {
  try {
    const curriculo = await CurriculoModel.findById(req.params.id);
    res.status(200).json(curriculo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Create and Save a new user
exports.create = async (req, res) => {
  if (!req.body.nome && !req.body.objetivo && !req.body.cargo) {
    res.status(400).send({
      message:
        "Ei, não esqueça de preencher os campos obrigatórissssssos ;)" +
        req.body.nome,
    });
  }

  const curriculo = new CurriculoModel({
    nome: req.body.nome,
    objetivo: req.body.objetivo,
    cargo: req.body.cargo,
    idioma: req.body.idioma,
    contato: req.body.contato,
    hobbies: req.body.hobbies,
    experiencia: req.body.experiencia,
    competencia: req.body.competencia,
    formacao: req.body.formacao,
  });

  await curriculo
    .save()
    .then((data) => {
      res.json(curriculo);
      res.send({
        message: "Pronto, agora o seu currículo está bem guardado ;)",
        curriculo: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Oops, não deu pra guardar o seu currículo. Dá um tempinho e vai de novo.",
      });
    });
};

// Update a curriculo by the id in the request
exports.update = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Opa, faltou alguma informação!",
    });
  }

  const id = req.params.id;

  await CurriculoModel.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Não achamos o seu currículo.`,
        });
      } else {
        res.send({
          message: "Deu tudo certo, o seu currículo já está atualizado.",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

// Delete a user with the specified id in the request
exports.destroy = async (req, res) => {
  await CurriculoModel.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Não achamos o seu currículo.`,
        });
      } else {
        res.send({
          message:
            "Prontinho, currículo apagado! Você criá-lo novamente a qualquer momento.",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
