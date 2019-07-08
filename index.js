const express = require('express');

const app = express();


const bukuRouter = require('./routes/Buku');

const sequelize = require('./configs/sequelize');

const Buku = require('./models/Buku');

app.listen(3000, () => {
    console.log('server started');
    sequelize.sync();
})