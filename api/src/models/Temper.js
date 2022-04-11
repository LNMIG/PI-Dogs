const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('temper', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      
    },
    name: {
      type: DataTypes.STRING,
      unique: true
    },
  }, {
        initialAutoIncrement: 1000,
        //freezeTableName: true
  });
}