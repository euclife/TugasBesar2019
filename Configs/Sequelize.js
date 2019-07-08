const Sequelize = required('sequelize');
const sequelize = new Sequelize('mysql://root:@localhost:3306/IF1_Kelompok2_BookStore');

module.exports = sequelize;