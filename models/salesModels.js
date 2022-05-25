const connection = require('./connection');

const getAllSales = () => connection.execute(
  `SELECT sale_id AS saleId, date,product_id AS productId, quantity
   FROM sales_products INNER JOIN sales ON sales.id = sales_products.sale_id`,
);
const getSalesById = (id) => connection.execute(
  `SELECT date,product_id AS productId, quantity
   FROM sales_products INNER JOIN sales ON sales.id = sales_products.sale_id WHERE sales.id = ?`,
  [id],
);

module.exports = {
  getAllSales,
  getSalesById,
};