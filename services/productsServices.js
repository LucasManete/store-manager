const productsModels = require('../models/productsModels');

const getAll = () => productsModels.getAllProducts();
const getById = (id) => productsModels.getProductsById(id);
const postProduct = (name, quantity) => productsModels.postProduct(name, quantity);
module.exports = {
  getAll,
  getById,
  postProduct,
};