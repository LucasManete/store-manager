const sinon = require('sinon');
const { expect } = require('chai')
const connection = require("../../../models/connection");
const salesModels = require('../../../models/salesModels');

describe("Busca as vendas no BD", () => {
  describe('Se não existir nenhuma venda criada', () => {
    before(() => {
      const result = [[]]

      sinon.stub(connection, 'execute').resolves(result)
    })

    after(() => {
      connection.execute.restore();
    })

    it('Retorna um array', async () => {
      const [result] = await salesModels.getAllSales();
      expect(result).to.be.an('array')
    })

    it('O array está vazio', async () => {
      const [result] = await salesModels.getAllSales();
      expect(result).to.be.empty;
  })
  })
})

describe("Busca venda por ID", () => {
  describe('Retorna uma venda', () => {
    before(() => {
      const result = {
        date: "2021-09-09T04:54:29.000Z",
        productId: 1,
        quantity: 2,
      }

      sinon.stub(connection, 'execute').resolves(result)
    })

    after(() => {
      connection.execute.restore();
    })

    it('Retorna um objeto', async () => {
      const result = await salesModels.getSalesById(1)
      expect(result).to.be.an('object')
    })

    it('O objeto contem 3 keys', async () => {
      const result = await salesModels.getSalesById(1)
      expect(result).to.have.property('date')
      expect(result).to.have.property('productId')
      expect(result).to.have.property('quantity')
  })
  })
})