const sequelize = require("../config/env.js");
const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class Sale extends Model {}
Sale.init({
    sale_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    client_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'client',
        key: 'client_id'
      }
    }
  }, {
    sequelize,
    modelName: 'Sale',
    freezeTableName: true,
    timestamps: false
  }
);


      Sale.associate = (db) => {
        
      };
      module.exports = () =>Sale;
