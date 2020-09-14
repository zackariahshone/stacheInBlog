module.exports = function(sequelize, DataTypes) {
    const users = sequelize.define("users", {
        author: DataTypes.STRING,
        blog: DataTypes.BLOB,
        title:DataTypes.STRING,
    });
    return users;
  };