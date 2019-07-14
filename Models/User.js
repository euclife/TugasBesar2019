const Sequelize = require('sequelize');

const sequelize = require('../Configs/Sequelize');

class User extends Sequelize.Model {}

User.init({
  Username: Sequelize.STRING,
  Email: Sequelize.INTEGER,
  Password: Sequelize.INTEGER,
  roles: Sequelize.INTEGER
}, { sequelize, modelName: 'user' });

module.exports = User;