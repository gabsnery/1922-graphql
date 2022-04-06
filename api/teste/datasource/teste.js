const {SQLDataSource } = require('datasource-sql')
class TesteAPI extends SQLDataSource{
    constructor(dbConfig){
        super(dbConfig)
    }
}

module.exports = TesteAPI