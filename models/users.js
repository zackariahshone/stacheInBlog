module.exports = function(sequelize, DataTypes) {
    const users = sequelize.define("user", {
      f_name: DataTypes.STRING,
      l_name: DataTypes.STRING,
      user_name:DataTypes.STRING,
      email:DataTypes.STRING,
      phone:DataTypes.INTEGER
    });
    return users;
  };