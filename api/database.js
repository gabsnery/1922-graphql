import Sequelize from 'sequelize';

var db = {}

const sequelize = new Sequelize('graphql-mysql-tutorial', 'graphql', '123456', {
    host: 'localhost',
    port: '8006',
    dialect: 'mysql',
    define: {
        freezeTableName: true,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    // <http://docs.sequelizejs.com/manual/tutorial/querying.html#operators>
    operatorsAliases: false,
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db;