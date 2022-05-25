const productsServices = require('../services/productsServices');

const getAllProductsController = async (_req, res) => {
    try {
      const [result] = await productsServices.getAll();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: 'Product not found' });
    }
};

const getProductIDController = async (req, res) => {
  const { id } = req.params;
  const [result] = await productsServices.getById(id);
 if (result.length === 0) {
   return res.status(500).json({ message: 'Product not found' });
 }
   res.status(200).json(result);
};

module.exports = {
  getAllProductsController,
  getProductIDController,
};