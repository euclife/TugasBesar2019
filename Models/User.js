const Sequelize = require('sequelize');

const sequelize = require('../Configs/Sequelize');

class User extends Sequelize.Model {}

User.init({
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  roles: Sequelize.STRING
}, { sequelize, modelName: 'user' });

module.exports = User;