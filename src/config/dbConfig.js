const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;



const connection = mongoose.connect(uri)
  .then(() => {
    console.log("Conectado");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connection;
