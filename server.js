const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dbConfig = require("./config/database.config");
const mongoose = require("mongoose");
const UserRoute = require("./app/routes/UserRouter");
const CurriculoRoute = require("./app/routes/CurriculoRouter");
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/user", UserRoute);
app.use("/curriculo", CurriculoRoute);

mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Conectado!!");
  })
  .catch((err) => {
    console.log("Não foi possível conectar a base de dados", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "API em desenvolvimento" });
});

app.listen(port, () => {
  console.log("Servidor ouvindo a porta 3000");
});
