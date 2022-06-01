const sinon = require('sinon');
const { expect } = require('chai');
const salesService = require('../../../services/salesServices');
const connection = require('../../../models/connection');

describe("(camada service) Busca as vendas no BD", () => {
  describe('Se não existir nenhuma venda criada', () => {
    const bancoDados = [{
      date: "2021-09-09T04:54:29.000Z",
      productId: 1,
      quantity: 2,
    }]
    before(async () => {
      sinon.stub(connection,'execute').resolves(bancoDados)
    })

    after(() => {
      connection.execute.restore();
    })
    it('Retorna um array', async () => {
      const result = await salesService.getAll();
      expect(result).to.be.an('array')
    })
  })
})

describe("(camada service) Busca venda por ID", () => {
  describe('Retorna uma venda', () => {
    const bancoDados = [{
      date: "2021-09-09T04:54:29.000Z",
      productId: 1,
      quantity: 2,
    }]
    before(async () => {
      sinon.stub(connection,'execute').resolves(bancoDados)
    })

    after(() => {
      connection.execute.restore();
    })
    
    it('Retorna um array', async () => {
      const result = await salesService.getById()
      expect(result).to.be.an('array')
    })
    it('retorna um objeto que contem 3 keys', async () => {
      const [result] = await salesService.getById()
      expect(result).to.have.property('date')
      expect(result).to.have.property('productId')
      expect(result).to.have.property('quantity')
  })
  })
})