const productsModels = require('../models/productsModels');

const getAll = () => productsModels.getAllProducts();
const getById = (id) => productsModels.getProductsById(id);
const postProduct = (name, quantity) => productsModels.postProduct(name, quantity);
const putProducts = async (name, quantity, id) => {
  await productsModels.putProducts({ name, quantity, id });
  const result = {
    id: Number(id),
    name,
    quantity,
  };
  return result;
};
module.exports = {
  getAll,
  getById,
  postProduct,
  putProducts,
};