const express = require("express");
const routes = require('./routes'); 
const port = process.env.PORT || 3333;

const app = express();
require('./config/dbConfig');

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.info("Rodando");
});
