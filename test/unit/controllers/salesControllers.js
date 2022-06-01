const sinon = require('sinon');
const { expect } = require('chai')

const salesControllers = require('../../../controllers/salesControllers');
const salesServices = require('../../../services/salesServices');


describe("(camada salesControllers) Verifica se ao chamar o getAll e não contém produtos no BD", () => {
  describe('quando não existe files no banco de dados', async () => {
    const response = {};
    const request = {};

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(salesServices, 'getAll').resolves([]);
    })

    after(() => {
      salesServices.getAll.restore();
    })

    it('Retorna o "status 200"', async () => {
      await salesControllers.getAllSales(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true)
    })

    // it('Retorna um objeto', async () => {
    //   await productsControllers.getAllProductsController(request, response);
     
    //   expect(response.json.calledWith(sinon.match.array)).to.be.equal(true)
    // })
  })
})

describe("(camada salesControllers) Verifica se ao chamar o getAll contém produtos no BD", () => {
  describe('quando não existe files no banco de dados', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(salesServices, 'getAll').resolves([
        {
          id: 1,
          name: "Martelo de Thor",
          quantity: 10
        }
      ]);
    })

    after(() => {
      salesServices.getAll.restore();
    })

    it('Retorna o "status 200"', async () => {
      await salesControllers.getAllSales(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true)
    })

    it('Retorna um objeto', async () => {
      await salesControllers.getAllSales(request, response);
     
      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true)
    })
  })
})

describe("(camada salescontroller) Verifica se é inserido com sucesso", () => {
  describe("Retorna um produto corretamente" , () => {
    
    const response = {};
    const request = {};

    before(() => {
      request.body = { };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(salesServices, 'createSale').resolves({
        date: "2021-09-09T04:54:29.000Z",
        productId: 1,
        quantity: 2,
      });
    })

    after(() => {
      salesServices.createSale.restore();
    })

    it('Retorna o "status 201"', async () => {
      await salesControllers.postSales(request, response);
      expect(response.status.calledWith(201)).to.be.equal(true)
    })
    it('retorna um json com o objeto criado', async () => {
      await salesControllers.postSales(request, response);
      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true)
    })
  })
} )