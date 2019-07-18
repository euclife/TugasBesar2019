const Sequelize = require('sequelize');

const sequelize = require('../Configs/Sequelize');

class Buku extends Sequelize.Model {}

Buku.init({
  Nama: Sequelize.STRING,
  Halaman: Sequelize.INTEGER,
  Harga: Sequelize.INTEGER,
  CategoryId: Sequelize.INTEGER
}, { sequelize, modelName: 'buku' });

module.exports = Buku;