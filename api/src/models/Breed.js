const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('breed', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoincrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    height: {
        type: DataTypes.STRING,
        allowNull: false
      },
    weight: {
      type: DataTypes.STRING,
      allowNull: false
    },
    life_span: {
        type: DataTypes.STRING,
      },
  }, {
    initialAutoIncrement: 1000,
    //freezeTableName: true
  });
}