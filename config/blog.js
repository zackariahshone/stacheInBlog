const Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
const sequelize = require("../config/connection.js");

// Creates users model that matches up with DB
const users = sequelize.define("users", {
  f_name: Sequelize.STRING,
  l_name: Sequelize.STRING,
  user_name: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.INTEGER
});

// Syncs with DB
users.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = users;
