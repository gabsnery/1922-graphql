const sequelize = require("../config/env.js");
const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class Client extends Model {}
Client.init({
    client_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING(45),
      allowNull: true
    },
    address: {
      type: Sequelize.STRING(45),
      allowNull: true
    },
    credit: {
      type: Sequelize.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Client',
    freezeTableName: true,
    timestamps: false
  }
);


      Client.associate = (db) => {
        
      };
      module.exports = () =>Client;
