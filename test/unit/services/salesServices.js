const sinon = require('sinon');
const { expect } = require('chai');
const salesService = require('../../../services/salesServices');

describe("(camada service) Busca as vendas no BD", () => {
  describe('Se não existir nenhuma venda criada', () => {
    it('Retorna um array', async () => {
      const [result] = await salesService.getAll();
      expect(result).to.be.an('array')
    })
  })
})

describe("(camada service) Busca venda por ID", () => {
  describe('Retorna uma venda', () => {
    const id = 1;
    it('Retorna um objeto', async () => {
      const result = await salesService.getAll(id)
      expect(result).to.be.an('array')
    })
    it('retorna um objeto que contem 3 keys', async () => {
      const [[result]] = await salesService.getAll(id)
      expect(result).to.have.property('date')
      expect(result).to.have.property('productId')
      expect(result).to.have.property('quantity')
  })
  })
})