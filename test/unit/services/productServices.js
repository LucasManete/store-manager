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
    it('retorna um objeto que contem 3 keys', async () => {
      const [result] = await productsServices.getAll();
      expect(result).to.have.property('id')
      expect(result).to.have.property('name')
      expect(result).to.have.property('quantity')
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

describe("(camada service) Verifica se existe produtos no BD por ID", () => {
  describe('Não retorna um produto', () => {
    before(async () => {
      sinon.stub(connection,'execute').resolves([[]])
    })

    after(() => {
      connection.execute.restore();
    })
    it('Retorna um array', async () => {
      const result = await productsServices.getById();
      expect(result).to.be.an('array')
    })

    it('retorna um array vazio', async () => {
      const [result] = await productsServices.getById();
      expect(result).to.be.empty
  })
  })
})

describe("(camada service) Verifica se é possivel inserir um novo produto", () => {
  describe('Retorna um produto', () => {
    const bancoDados = [[
      {
      id: 1,
      name: "Martelo de Thor",
      quantity : 10,
      }
    ]]
    before(async () => {
      sinon.stub(connection,'execute').resolves(bancoDados)
    })

    after(() => {
      connection.execute.restore();
    })
    it('Retorna um objeto', async () => {
      const result = await productsServices.postProduct();
      expect(result).to.be.an('object')
    })

    it('retorna um objeto não vazio', async () => {
      const result = await productsServices.postProduct();
      expect(result).to.be.not.empty
  })
  it('retorna um objeto que contem 3 keys', async () => {
    const result = await productsServices.postProduct();
    expect(result).to.have.property('id')
    expect(result).to.have.property('name')
    expect(result).to.have.property('quantity')
  })
  })
})

describe("(camada service) Verifica se é possivel excluir um produto", () => {
  describe('Retorna um produto', () => {
    const bancoDados = [[
      {
      id: 1,
      name: "Martelo de Thor",
      quantity : 10,
      }
    ]]
    before(async () => {
      sinon.stub(connection,'execute').resolves(bancoDados)
    })

    after(() => {
      connection.execute.restore();
    })
    it('Não retorna nada em caso de sucesso', async () => {
      const result = await productsServices.deleteProduct();
      expect(result).to.be.an("undefined")
    })
  })
})

describe("(camada service) Verifica se é possivel atualizar um produto", () => {
  describe('Retorna um produto', () => {
    const bancoDados = [[
      {
      id: 1,
      name: "Martelo de Thor",
      quantity : 10,
      }
    ]]
    before(async () => {
      sinon.stub(connection,'execute').resolves(bancoDados)
    })

    after(() => {
      connection.execute.restore();
    })
    it('retorna um objeto caso de sucesso', async () => {
      const result = await productsServices.putProducts();
      expect(result).to.be.an("object")
    })
  })
})