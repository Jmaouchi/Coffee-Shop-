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
    item_image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
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