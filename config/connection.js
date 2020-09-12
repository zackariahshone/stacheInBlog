const mysql = require('mysql');
const Sequelize = require("sequelize");


console.log('connnected next');
const sequelize = new Sequelize("f2ejrfnvmessgh5z", "f6y7rtxswqgtamx9", "fzrchvh9ew342l2a", {

    host: "d1kb8x1fu8rhcnej.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    dialect: "mysql",
 
});
try {
 sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

  module.exports = sequelize;