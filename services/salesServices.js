const salesModels = require('../models/salesModels');
const salesConnect = require('../models/sales');

const getAll = () => salesModels.getAllSales();
const getById = (id) => salesModels.getSalesById(id);

const createSale = async (sales) => {
  const { id } = await salesConnect.createSales();
  const newSaleWithValues = await Promise.all(
    sales.map((sale) => salesModels.postSales(id, sale.productId, sale.quantity)),
    );
  return ({ id, itemsSold: newSaleWithValues });
};

const updateSale = async (id, sales) => {
  const result = await Promise.all(
    sales.map((sale) => salesModels.updateSale(id, sale.productId, sale.quantity)),
    );
  return ({
    saleId: +id,
    itemUpdated: result,
  });
};

const deleteSale = async (id) => salesModels.deleteSale(id);

module.exports = {
  getAll,
  getById,
  createSale,
  updateSale,
  deleteSale,
};