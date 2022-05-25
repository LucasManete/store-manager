const connection = require('./connection');

const getAllSales = () => connection.execute(
  'SELECT * FROM StoreManager.sales ',
);
const getSalesById = (id) => connection.execute(
  'SELECT * FROM StoreManager.sales WHERE id = ?', [id],
);

module.exports = {
  getAllSales,
  getSalesById,
};