const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Keranjang extends Sequelize.Model {}

Keranjang.init({
  banyak: Sequelize.INTEGER
}, { sequelize, modelName: 'keranjang' });

module.exports = Keranjang;