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

module.exports = {
  getAll,
  getById,
  createSale,
};