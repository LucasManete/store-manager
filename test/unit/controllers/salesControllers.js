const sinon = require('sinon');
const { expect } = require('chai')

const salesControllers = require('../../../controllers/salesControllers');
const salesServices = require('../../../services/salesServices');

// describe("(camada controller) Verifica se é possivel deletar uma venda", () => {
//   describe('Retorna nada quando dá sucesso', async () => {
//     const response = {};
//     const request = {params: {id: 1}};
//     before(() => {
//       const bancoDados = [[{
//         date: "2021-09-09T04:54:29.000Z",
//         productId: 1,
//         quantity: 2,
//       }]]
//       response.status = sinon.stub().returns(response);
//       response.json = sinon.stub().returns();

//       sinon.stub(salesServices, 'deleteSale').resolves(bancoDados);
//       sinon.stub(salesServices, 'getById').resolves(bancoDados);
//     })

//     after(() => {
//       salesServices.deleteSale.restore();
//     })

//     it('Retorna o "status 200"', async () => {
//       await salesControllers.deleteSale(request, response);
//       expect(response.status.calledWith(200)).to.be.equal(true)
//     })
//   })
// })

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
})

describe("(camada controller) Verifica se ao chamar o getById não contém sales no BD", () => {
  describe('quando não existe sales no banco de dados', async () => {
    const response = {};
    const request = {params: {id: 9999}};
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns({ 'message': 'Sale not found' });

      sinon.stub(salesServices, 'getById').resolves([[]]);
    })

    after(() => {
      salesServices.getById.restore();
    })

    it('Retorna o "status 404"', async () => {
      await salesControllers.getSalesById(request, response);
      expect(response.status.calledWith(404)).to.be.equal(true)
    })
    it('contem uma chave menssage', async () => {
       await salesControllers.getSalesById(request, response);
       expect(response.json()).to.have.key("message")
     })
     it('o erro retorna um objeto de erro', async () => {
      await salesControllers.getSalesById(request, response);
      expect(response.json()).to.be.an("object")
    })
  })
})

describe("(camada controller) Verifica se ao chamar o getById contém sales no BD", () => {
  describe('quando existe sales no banco de dados', async () => {
    const response = {};
    const request = {params: {id: 1}};
    const bancoDados = [{
      date: "2021-09-09T04:54:29.000Z",
      productId: 1,
      quantity: 2,
    }]
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(salesServices, 'getById').resolves(bancoDados);
    })

    after(() => {
      salesServices.getById.restore();
    })

    it('Retorna o "status 200"', async () => {
      await salesControllers.getSalesById(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true)
    })

    it('Retorna um objeto', async () => {
      await salesControllers.getSalesById(request, response);
     
      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true)
    })
  })
})
