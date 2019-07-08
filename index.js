const express = require('express');

const app = express();


const bukuRouter = require('./Routes/Buku');

const sequelize = require('./Configs/Sequelize');

const Buku = require('./Models/Buku');

app.listen(3000, () => {
    console.log('server started');
    sequelize.sync();
})