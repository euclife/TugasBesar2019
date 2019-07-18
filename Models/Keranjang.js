const Sequelize = require('sequelize');

const sequelize = require('../Configs/Sequelize');

class Keranjang extends Sequelize.Model {}

Keranjang.init({
  bukuId: Sequelize.INTEGER,
  userId: Sequelize.INTEGER
}, { sequelize, modelName: 'keranjang' });

module.exports = Keranjang;