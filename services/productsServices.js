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
const getbyName = async (name) => {
  const teste = await productsModels.getByName(name);
  console.log(teste);
  if (teste) {
    return true;
  }
  return false;
};
const deleteProduct = (id) => productsModels.deleteProduct(id);
module.exports = {
  getAll,
  getById,
  postProduct,
  putProducts,
  deleteProduct,
  getbyName,
};