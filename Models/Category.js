const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Category extends Sequelize.Model {}

Category.init({
  Id: { Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
  NamaCategory: Sequelize.STRING
  
  
}, { sequelize, modelName: 'category' });

module.exports = Category;