const express = require("express");
const routes = require('./routes'); 
require("dotenv").config();

const port = process.env.PORT || 3333;
console.log("port:" + port);
console.log("SECRET_KEY:" + process.env.SECRET_KEY);
const app = express();
require('./config/dbConfig');

app.use(express.json());
app.use(routes);

app.listen(port);
