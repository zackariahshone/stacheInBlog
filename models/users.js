const bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
    const users = sequelize.define("users", {
      f_name: DataTypes.STRING,
      l_name: DataTypes.STRING,
      user_name:DataTypes.STRING,
      email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      phone:DataTypes.INTEGER,
      pwd: {
       type: DataTypes.STRING,
       allowNull: false
      } 
        
    });
    return users;
  };