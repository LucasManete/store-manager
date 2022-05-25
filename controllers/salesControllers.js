const salesServices = require('../models/salesModels');

const getAllSales = async (_req, res) => {
  const [result] = await salesServices.getAllSales();
  return res.status(200).json(result);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const [result] = await salesServices.getSalesById(id);
  if (result.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  res.status(200).json(result);
};

module.exports = {
  getAllSales,
  getSalesById,
};