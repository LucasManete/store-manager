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

describe("Busca os Produtos no BD", () => {
  describe('Se existir algum produto criado', () => {
    before(() => {
       const result = [{
        id: 1,
        name: "produto A",
        quantity: 10,
      }]

      sinon.stub(connection, 'execute').resolves(result)
    })

    after(() => {
      connection.execute.restore();
    })

    it('Retorna um array', async () => {
      const result = await productsModels.getAllProducts();
      expect(result).to.be.an('array')
    })

    it('O array está vazio', async () => {
      const [result] = await productsModels.getAllProducts();
      expect(result).not.to.be.empty;
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

describe("Busca produtos por ID", () => {
  describe('Verifica se existe algum produto no BD', () => {
    
    before(() => {
      sinon.stub(connection, 'execute').resolves([[]])
    })

    after(() => {
      connection.execute.restore();
    })

    it('Retorna um objeto', async () => {
      const result = await productsModels.getProductsById();
      expect(result).to.be.an('array')
    })

    it('Retorna um array vazio', async () => {
      const [result] = await productsModels.getAllProducts();
      expect(result).to.be.empty
  })
  })
})

describe("Verifica se é possivel inserir um novo produto", () => {
  describe('Retorna um produto', () => {
    const result = [{
      name: "produto A",
      quantity: 10,
    }]
    before(() => {
      sinon.stub(connection, 'execute').resolves(result)
    })

    after(() => {
      connection.execute.restore();
    })

    it('Retorna um objeto', async () => {
      const result = await productsModels.postProduct();
      expect(result).to.be.an('object')
    })

    it('Retorna um array com o valor', async () => {
      const result = await productsModels.postProduct();
      expect(result).to.be.not.empty
  })
  })
})
