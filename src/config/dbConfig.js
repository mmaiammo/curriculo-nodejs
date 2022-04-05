const mongoose = require("mongoose");
require("dotenv").config(); 
const uri = process.env.MONGODB_URI;
console.log('uri: ' + uri);


const connection = mongoose
  .connect(uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connection;
