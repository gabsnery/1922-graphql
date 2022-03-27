const { ApolloServer, gql } = require('apollo-server')
const { mergeTypeDefs } = require('graphql-tools')
const clientSchema = require('./client/schema/client.graphql')
const clientResolvers = require('./client/resolvers/clientResolvers.js')
const ClientsAPI = require('./client/datasource/client.js')
const productSchema = require('./product/schema/product.graphql')
//const typeDefs =mergeTypeDefs([clientSchema, productSchema]);
const typeDefs = [clientSchema]
const resolvers = [clientResolvers]
const server = new ApolloServer({ typeDefs, resolvers ,dataSources:()=>{
  return{
    ClientsAPI:new ClientsAPI()
  }
}})
server.listen().then(({ url }) => {
  console.log(`Serve rodando na porta:${url}`)
})
