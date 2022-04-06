const sequelize = require("../config/env.js");
const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class Product extends Model {}
Product.init({
    product_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    entry_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'entry',
        key: 'entry_id'
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
    freezeTableName: true,
    timestamps: false
  }
);


      Product.associate = (db) => {
        
      };
      module.exports = () =>Product;
