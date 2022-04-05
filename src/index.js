const express = require("express");
const routes = require('./routes'); 
const port = process.env.PORT || 3333;
console.log("port:" + port);
console.log("port:" + process.env.SECRET_KEY);
const app = express();
require('./config/dbConfig');

app.use(express.json());
app.use(routes);

app.listen(port);
