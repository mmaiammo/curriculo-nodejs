require("dotenv").config();
require("./config/dbConfig");

const express = require("express");
const routes = require("./routes");
const port = process.env.PORT || 3333;
const app = express();

app.use(express.json());
app.use(routes);
app.listen(port);
