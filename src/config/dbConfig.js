const mongoose = require("mongoose");

const dbConfig = 'mongodb+srv://admin:jean2004@dbcurriculo.borwy.mongodb.net/dbcurriculo?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;