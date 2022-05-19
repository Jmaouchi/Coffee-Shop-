const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Items extends Model { }


Items.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    item_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    item_price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    item_stock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'items'
  }
);

module.exports = Items;