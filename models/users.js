module.exports = function(sequelize, DataTypes) {
    const users = sequelize.define("users", {
      f_name: DataTypes.STRING,
      l_name: DataTypes.STRING,
      user_name:DataTypes.STRING,
      email:DataTypes.STRING,
      phone:DataTypes.INTEGER,
      pwd: DataTypes.STRING
    });
    return users;
  };