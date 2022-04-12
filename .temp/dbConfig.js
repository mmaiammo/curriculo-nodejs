const mongoose = require("mongoose");
require("dotenv").config(); 
const uri = process.env.MONGODB_DB;

const connection = mongoose
  .connect(uri)
  .then(() => {
    console.log("Conectado");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connection;
