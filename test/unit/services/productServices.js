const sinon = require('sinon');
const { expect } = require('chai');
const productsServices  = require('../../../services/productsServices')


describe("(camada service) Busca os Produtos no BD", () => {
  describe('(camada service) Se não existir nenhum produto criado', () => {
    it('Retorna um array', async () => {
      const response = await productsServices.getAll()
      expect(response).to.be.an('array')
    })
  })
})

describe("(camada service) Busca produtos por ID", () => {
  describe('Retorna um produto', () => {
    const id = 1
    it('Retorna um objeto', async () => {
      const [result] = await productsServices.getById(id);
      expect(result).to.be.an('array')
    })

    it('retorna um objeto que contem 3 keys', async () => {
      const [[result]] = await productsServices.getById(id);
      expect(result).to.have.property('id')
      expect(result).to.have.property('name')
      expect(result).to.have.property('quantity')
  })
  })
})
