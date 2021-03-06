const productsServices = require('../services/productsServices');

const getAllProductsController = async (_req, res) => {
    try {
      const [result] = await productsServices.getAll();
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ message: 'Product not found' });
    }
};

const getProductIDController = async (req, res) => {
  const { id } = req.params;
  const [[result]] = await productsServices.getById(id);
 if (result === undefined) {
   return res.status(404).json({ message: 'Product not found' });
 }
   res.status(200).json(result);
};

const postProducts = async (req, res) => {
  const { name, quantity } = req.body;
  const getExists = await productsServices.getbyName(name);
  const result = await productsServices.postProduct(name, quantity);
  if (getExists) {
    return res.status(409).json({ message: 'Product already exists' });
  }
  return res.status(201).json(result);
};

const putProducts = async (req, res) => {
  const { name, quantity } = req.body;
  const { id } = req.params;
  const [getId] = await productsServices.getById(id);
  const result = await productsServices.putProducts(name, quantity, id);
  if (getId.length === 0) {
   return res.status(404).json({ message: 'Product not found' });
  }
 return res.status(200).json({ ...result });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const [getId] = await productsServices.getById(id);
  await productsServices.deleteProduct(id);
  if (getId.length === 0) {
    res.status(404).json({ message: 'Product not found' });
  }
  return res.status(204).end();
};

module.exports = {
  getAllProductsController,
  getProductIDController,
  postProducts,
  putProducts,
  deleteProduct,
};