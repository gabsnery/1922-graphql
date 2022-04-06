const sequelize = require("../config/env.js");
const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class Entry extends Model {}
Entry.init({
    entry_id: {
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
    modelName: 'Entry',
    freezeTableName: true,
    timestamps: false
  }
);


      Entry.associate = (db) => {
        
      };
      module.exports = () =>Entry;
