const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Buku extends Sequelize.Model {}

Buku.init({
  Nama: Sequelize.STRING,
  Halaman: Sequelize.INTEGER,
  Stok: Sequelize.INTEGER,
  Harga: Sequelize.INTEGER
  
}, { sequelize, modelName: 'buku' });

module.exports = Buku;