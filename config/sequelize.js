const Sequelize = require('sequelize');
const database = require('./config');

//const sequelize = new Sequelize();

// const sequelize = new Sequelize("alexa", "root","elias10", {
//     host: "localhost",
//     dialect: "mysql",
// });


const sequelize = new Sequelize("alexa", "alexaroot","alexa101", {
  host: "mysql835.umbler.com",
  dialect: "mysql",
  port: 41890
});

module.exports = sequelize;