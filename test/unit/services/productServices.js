const sinon = require('sinon');
const { expect } = require('chai');
const productsServices  = require('../../../services/productsServices')
const connection = require('../../../models/connection')


describe("(camada service) Busca os Produtos no BD", () => {
  describe('(camada service) Se existir algum produto criado', () => {
    const bancoDados = [
      {
      id: 1,
      name: "Martelo de Thor",
      quantity : 10,
      }
    ]
    before(async () => {
      sinon.stub(connection,'execute').resolves(bancoDados)
    })

    after(() => {
      connection.execute.restore();
    })
    it('Retorna um array', async () => {
      const response = await productsServices.getAll()
      expect(response).to.be.an('array')
    })
  })
})

describe("(camada service) Busca produtos por ID", () => {
  describe('Retorna um produto', () => {
    const bancoDados = [
      {
      id: 1,
      name: "Martelo de Thor",
      quantity : 10,
      }
    ]
    before(async () => {
      sinon.stub(connection,'execute').resolves(bancoDados)
    })

    after(() => {
      connection.execute.restore();
    })
    it('Retorna um objeto', async () => {
      const result = await productsServices.getById();
      expect(result).to.be.an('array')
    })

    it('retorna um objeto que contem 3 keys', async () => {
      const [result] = await productsServices.getById();
      expect(result).to.have.property('id')
      expect(result).to.have.property('name')
      expect(result).to.have.property('quantity')
  })
  })
})
