const sinon = require('sinon');
const { expect } = require('chai')
const connection = require("../../../models/connection");
const productsModels = require('../../../models/productsModels')

describe("Busca os Produtos no BD", () => {
  describe('Se não existir nenhum produto criado', () => {
    before(() => {
      const result = [[]]

      sinon.stub(connection, 'execute').resolves(result)
    })

    after(() => {
      connection.execute.restore();
    })

    it('Retorna um array', async () => {
      const [result] = await productsModels.getAllProducts();
      expect(result).to.be.an('array')
    })

    it('O array está vazio', async () => {
      const [result] = await productsModels.getAllProducts();
      expect(result).to.be.empty;
  })
  })
})

describe("Busca produtos por ID", () => {
  describe('Retorna um produto', () => {
    before(() => {
      const result = {
        id: 1,
        name: "produto A",
        quantity: 10,
      }

      sinon.stub(connection, 'execute').resolves(result)
    })

    after(() => {
      connection.execute.restore();
    })

    it('Retorna um objeto', async () => {
      const result = await productsModels.getProductsById(1);
      expect(result).to.be.an('object')
    })

    it('O objeto contem 3 keys', async () => {
      const result = await productsModels.getAllProducts(1);
      expect(result).to.have.property('id')
      expect(result).to.have.property('name')
      expect(result).to.have.property('quantity')
  })
  })
})
