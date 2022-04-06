const { ApolloServer, gql } = require('apollo-server')
const { mergeTypeDefs } = require('graphql-tools')
const clientSchema = require('./client/schema/client.graphql')
const clientResolvers = require('./client/resolvers/clientResolvers.js')
const ClientsAPI = require('./client/datasource/client.js')

const testeSchema = require('./teste/schema/teste.graphql')
const testeResolvers = require('./teste/resolvers/testeResolvers.js')
const TesteAPI = require('./teste/datasource/teste.js')
const productSchema = require('./product/schema/product.graphql')
//const typeDefs =mergeTypeDefs([clientSchema, productSchema]);
const path=require('path')
const dbConfig={
  client:'Mysql',
  useNullAsDefault:true,
  connection:{
    filename:path.resolve(__dirname,'./data/database.db')
  }
}
const typeDefs = mergeTypeDefs([clientSchema,TesteSchema])
const resolvers = [clientResolvers,testeResolvers]
const server = new ApolloServer({ typeDefs, resolvers ,dataSources:()=>{
  return{
    ClientsAPI:new ClientsAPI(),
    TesteAPI:new TesteAPI(dbConfig)
  }
}})
server.listen().then(({ url }) => {
  console.log(`Serve rodando na porta:${url}`)
})
