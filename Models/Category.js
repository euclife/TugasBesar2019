const Sequelize = require('sequelize');

const sequelize = require('../Configs/Sequelize');

class Category extends Sequelize.Model {}

Category.init({
  NamaCategory: Sequelize.STRING
}, { sequelize, modelName: 'category' });

module.exports = Category;