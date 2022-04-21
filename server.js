const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3003;

var corsOptions = {
  origin: `http://localhost:${PORT}`,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const dbConfig = require("./app/config/db.config");
const Role = db.role;

db.mongoose
  .connect(dbConfig.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado ao MongoDB com Sucesso.");
    initial();
  })
  .catch((err) => {
    console.error("Erro de Conexão", err);
    process.exit();
  });

  //-- INFO: Configura os papéis
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });
      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'moderator' to roles collection");
      });
      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}

// end_initial
app.get("/", (req, res) => {
  res.json({ message: "Bem-vindo a API de Curriculo" });
});

require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/curriculo.routes")(app);

app.listen(PORT, () => {
  console.log(`Servidor ouvindo a porta ${PORT}`);
});
