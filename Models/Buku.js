const Sequelize = require('sequelize');

const sequelize = require('../Configs/Sequelize');

class Buku extends Sequelize.Model {}

Buku.init({
  Id: { Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
  Nama: Sequelize.STRING,
  Halaman: Sequelize.INTEGER,
  Stok: Sequelize.INTEGER,
  Harga: Sequelize.INTEGER
  
}, { sequelize, modelName: 'buku' });

module.exports = Buku;