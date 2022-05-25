const productsModels = require('../models/productsModels');

const getAll = () => productsModels.getAllProducts();
const getById = (id) => productsModels.getProductsById(id);
module.exports = {
  getAll,
  getById,
};