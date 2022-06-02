const sinon = require('sinon');
const { expect } = require('chai')

const productsControllers = require('../../../controllers/productsControllers');
const productsServices = require('../../../services/productsServices');

describe("(camada controller) Verifica se ao chamar o getAll e não contém produtos no BD", () => {
  describe('quando não existe files no banco de dados', async () => {
    const response = {};
    const request = {};

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(productsServices, 'getAll').resolves([{}]);
    })

    after(() => {
      productsServices.getAll.restore();
    })

    it('Retorna o "status 200"', async () => {
      await productsControllers.getAllProductsController(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true)
    })

    it('Retorna um objeto', async () => {
      await productsControllers.getAllProductsController(request, response);
     
      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true)
    })
  })
})

describe("(camada controller) Verifica se ao chamar o getAll contém produtos no BD", () => {
  describe('quando não existe files no banco de dados', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(productsServices, 'getAll').resolves([
        {
          id: 1,
          name: "Martelo de Thor",
          quantity: 10
        }
      ]);
    })

    after(() => {
      productsServices.getAll.restore();
    })

    it('Retorna o "status 200"', async () => {
      await productsControllers.getAllProductsController(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true)
    })

    it('Retorna um objeto', async () => {
      await productsControllers.getAllProductsController(request, response);
     
      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true)
    })
  })
})

describe("(camada controller) Verifica se ao chamar o getById contém produtos no BD", () => {
  describe('quando não existe products no banco de dados', async () => {
    const response = {};
    const request = {params: {id: 1}};
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns({ message: 'Product not found' });

      sinon.stub(productsServices, 'getById').resolves([[]]);
    })

    after(() => {
      productsServices.getById.restore();
    })

    it('Retorna o "status 404"', async () => {
      await productsControllers.getProductIDController(request, response);
      expect(response.status.calledWith(404)).to.be.equal(true)
    })

    it('Retorna um objeto', async () => {
      await productsControllers.getProductIDController(request, response);
     
      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true)
    })
    it('contem uma chave menssage', async () => {
      await productsControllers.getProductIDController(request, response);
      expect(response.json()).to.have.key("message")
    })
  })
})

describe("(camada controller) Verifica se é inserido com sucesso", () => {
  describe("Retorna um produto corretamente" , async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        name: 'testeee',
        quantity: 100
      };

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productsServices, 'postProduct').resolves(request.body);
      sinon.stub(productsServices, 'getbyName').resolves(false);
    })

    after(() => {
     productsServices.postProduct.restore();
    })

    it('Retorna o "status 201"', async () => {
      await productsControllers.postProducts(request, response);
      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('retorna um json com o objeto criado', async () => {
      await productsControllers.postProducts(request, response);
      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true)
    })
  })
})

describe("(camada controller) Verifica se ao chamar o getById contém sales no BD", () => {
  describe('quando existe sales no banco de dados', async () => {
    const response = {};
    const request = {params: {id: 1}};
    const bancoDados = [[{
          id: 1,
          name: "Martelo de Thor",
          quantity: 10
        }]]

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(productsServices, 'getById').resolves(bancoDados);
    })

    after(() => {
        productsServices.getById.restore();
    })

    it('Retorna o "status 200"', async () => {
      await productsControllers.getProductIDController(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true)
    })

    it('Retorna um objeto', async () => {
      await productsControllers.getProductIDController(request, response)
     
      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true)
    })
  })
})


