const Sequelize = require('sequelize');

const sequelize = new Sequelize('IF1_Kelompok2_BookStore', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;