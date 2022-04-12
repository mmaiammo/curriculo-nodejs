var mongoose = require("mongoose");

var schema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    unique: false,
  },
  contato: {
    type: Array,
    required: false,
    items: {
      type: String,
    },
  },
  objetivo: {
    type: String,
    required: true,
  },
  cargo: {
    type: String,
    required: true,
  },
  formacao: {
    type: Object,
    required: false,
    title: "curriculos.formacao",
    // required: ["instituicao", "curso", "local"],
    properties: {
      instituicao: {
        type: String,
      },
      curso: {
        type: String,
      },
      local: {
        type: String,
      },
    },
  },
  hobbies: {
    type: Array,
    required: false,
    items: {
      type: String,
    },
  },
  idioma: {
    type: Array,
    required: false,
    items: {
      type: String,
    },
  },
  experiencia: {
    type: Array,
    required: false,
    items: {
      title: "curriculos.experiencia",
      // required: ["empresa", "periodo", "cargo", "atividades", "atividade"],
      properties: {
        empresa: {
          required: false,
          type: String,
        },
        periodo: {
          type: Object,
          required: false,
          title: "curriculos.experiencia.periodo",
          // required: ["inicio", "fim"],
          properties: {
            inicio: {
              required: false,
              type: Date,
            },
            fim: {
              required: false,
              type: Date,
            },
          },
        },
        cargo: {
          required: false,
          type: String,
        },
        atividades: {
          required: false,
          type: String,
        },
      },
    },
  },
  competencia: {
    type: Array,
    required: false,
    items: {
      title: "curriculos.competencia",
      // required: ["titulo", "itens"],
      properties: {
        titulo: {
          type: String,
        },
        itens: {
          type: Array,
          items: {
            type: String,
          },
        },
      },
    },
  },
});
// ---------------

      
// --------
var curriculos = new mongoose.model("curriculos", schema);

module.exports = curriculos;