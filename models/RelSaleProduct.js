const sequelize = require("../config/env.js");
const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class RelSaleProduct extends Model {}
RelSaleProduct.init({
    idrel_sale_product: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    sequelize,
    modelName: 'RelSaleProduct',
    freezeTableName: true,
    timestamps: false
  }
);


      RelSaleProduct.associate = (db) => {
        
      };
      module.exports = () =>RelSaleProduct;
