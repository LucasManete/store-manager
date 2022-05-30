const connection = require('./connection');

const createSales = async () => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.sales(DATE) VALUES(NOW())',
  );
  const sale = {
    id: result.insertId,
  };
  return sale;
};

module.exports = {
  createSales,
};