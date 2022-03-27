const { RESTDataSource } = require('apollo-datasource-rest')

class ClientsAPI extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = 'http://localhost:3000'
    this.responseCustom = {
      code: 200,
      message: 'Sucesso'
    }
  }

  async addClient (client) {
    const Clients = await this.get('/Clients')
    const Product = await this.get('products?type=' + client.product)
    this.post('/Clients', {
      ...client,
      id: Clients.length + 1,
      role: Product[0].id,
      createdAt: new Date()
    })
    return {
      name: client.name,
      active: client.active,
      address: client.address,
      createdAt: new Date(),
      product: { id: Product[0].id, type: Product[0].type }
    }
  }
  async updateClient (client) {
    const Product = await this.get('products?type=' + client.client.product)
    this.put(`/Clients/${client.id}`, { ...client.client, role: Product[0].id })
    return {
      ...this.responseCustom,
      client: {
        ...client.client,
        product: { id: Product[0].id, type: Product[0].type }
      }
    }
  }
  async deleteClient (id) {
    await this.delete(`/Clients/${id}`)
    return id
  }
  async getClients () {
    const Clients = await this.get('/Clients')
    const Products = await this.get('/products')
    return Clients.map(async Client => ({
      id: Client.id,
      name: Client.name,
      active: Client.active,
      address: Client.address,
      createdAt: Client.createdAt,
      product: Products.find(x => x.id == Client.role)
    }))
  }
  async getClientById (_id) {
    const Clients = await this.get('/Clients')
    const Products = await this.get('/products')
    const Cli = Clients.find(x => x.id == _id)
    if (Cli)
      return {
        id: Cli.id,
        name: Cli.name,
        active: Cli.active,
        address: Cli.address,
        createdAt: Cli.createdAt,
        product: await this.get(`/products/${Cli.role}`)
      }
    else return null
  }
}

module.exports = ClientsAPI
