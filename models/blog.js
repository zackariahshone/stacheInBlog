module.exports = function(sequelize, DataTypes) {
    const blog = sequelize.define("blog", {
        author: DataTypes.STRING,
        bloginput: DataTypes.TEXT,
        title:DataTypes.STRING
    });
    return blog;
};