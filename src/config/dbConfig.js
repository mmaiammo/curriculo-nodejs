const mongoose = require("mongoose");

const USER_DB = "admin";
const PASS_DB = "jean2004";
const dbConfig =
  "mongodb+srv://admin:jean2004@dbcurriculo.borwy.mongodb.net/dbcurriculo?retryWrites=true&w=majority";

// https://data.mongodb-api.com/app/data-mbqyl/endpoint/data/beta

const connection = mongoose
  .connect(
    `mongodb+srv://${USER_DB}:${PASS_DB}@dbcurriculo.borwy.mongodb.net/dbcurriculo?retryWrites=true&w=majority`,
    // {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }
  )
  .then(() => {
    console.log("Conectado");    
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connection;
