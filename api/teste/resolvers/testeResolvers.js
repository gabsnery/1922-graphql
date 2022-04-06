const { GraphQLScalarType } = require('graphql')
const tests = [
  {
    id: 1,
    description: 'aqui',
    type: 'typoe'
  },
  {
    id: 2,
    description: 'aquiq',
    type: 'typoe'
  }
]
const testeResolvers = {
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'string de data e hora formato iso-8601',
    serialize: value => value.toString(),
    parseValue: value => new Date(value),
    parseLiteral: ast => new Date(ast.value)
  }),
  Query: {
    entries (root, args, { dataSources }, info) {
      return tests
    },
    Entry (root, { id }, { dataSources }, info) {
      return tests[0]
    }
  }
  /*Mutation: {
    addClient (root, client, { dataSources }, info) {
      return dataSources.ClientsAPI.addClient(client.client)
    },
    updateClient (root, client, { dataSources }, info) {
      return dataSources.ClientsAPI.updateClient(client)
    },
    deleteClient (root, { id }, { dataSources }, info) {
      return dataSources.ClientsAPI.deleteClient(id)
    }
  }*/
}

module.exports = testeResolvers
