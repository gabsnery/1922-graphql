const { GraphQLScalarType } = require('graphql')
const clientResolvers = {
  ProductTypes:{
    ESTUDANTE:"ESTUDANTE",
    DOCENTE:"DOCENTE",
    COORDENACAO:"COORDENACAO"
  },
  DateTime:new GraphQLScalarType({
    name:'DateTime',
    description:'string de data e hora formato iso-8601',
    serialize: (value) => value.toString(),
    parseValue: (value) => new Date(value),
    parseLiteral: (ast) => new Date(ast.value)
  }),
  Query: {
    clients (root, args, { dataSources }, info) {
      return dataSources.ClientsAPI.getClients()
    },
    client (root, { id }, { dataSources }, info) {
      return dataSources.ClientsAPI.getClientById(id)
    }
  },
  Mutation: {
    addClient(root, client, { dataSources }, info) {
        return dataSources.ClientsAPI.addClient(client.client)
      },
      updateClient(root, client, { dataSources }, info) {
        return dataSources.ClientsAPI.updateClient(client)
      },
      deleteClient(root, {id}, { dataSources }, info) {
        return dataSources.ClientsAPI.deleteClient(id)
      },
  }
}

module.exports = clientResolvers
