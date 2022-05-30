const salesServices = require('../services/salesServices');

const getAllSales = async (_req, res) => {
  const [result] = await salesServices.getAll();
  return res.status(200).json(result);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const [result] = await salesServices.getById(id);
 
  if (result.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  res.status(200).json(result);
};

const postSales = async (req, res) => {
  const sale = await salesServices.createSale(req.body);
  res.status(201).json(sale);
};

const updateSale = async (req, res) => {
  const { id } = req.params;
  const sale = await salesServices.updateSale(id, req.body);
  res.status(200).json(sale);
};

module.exports = {
  getAllSales,
  getSalesById,
  postSales,
  updateSale,
};