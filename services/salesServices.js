const salesModels = require('../models/salesModels');

const getAll = () => salesModels.getAllSales;
const getById = (id) => salesModels.getSalesById(id);

module.exports = {
  getAll,
  getById,
};