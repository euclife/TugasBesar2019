const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Category extends Sequelize.Model {}

Category.init({
  NamaCategory: Sequelize.STRING
  
  
}, { sequelize, modelName: 'category' });

module.exports = Category;