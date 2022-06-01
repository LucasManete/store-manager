const connection = require('./connection');

const getAllSales = () => connection.execute(
  `SELECT sale_id AS saleId, date,product_id AS productId, quantity
   FROM StoreManager.sales_products INNER JOIN sales ON sales.id = sales_products.sale_id`,
);
const getSalesById = (id) => connection.execute(
  `SELECT date,product_id AS productId, quantity
   FROM StoreManager.sales_products 
   INNER JOIN sales ON sales.id = sales_products.sale_id WHERE sales.id = ?`,
  [id],
);

const postSales = async (saleId, productId, quantity) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products(sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity],
  );
  return ({ productId, quantity });
};

const updateSale = async (saleId, productId, quantity) => {
  await connection.execute(
  'UPDATE StoreManager.sales_products SET product_id = ?, quantity = ? WHERE sale_id = ?',
  [productId, quantity, saleId],
 );
 return ({ productId, quantity });
};

const deleteSale = async (id) => {
  await connection.execute(
    'DELETE FROM StoreManager.sales_products WHERE sale_id = ?', [id],
  );
};

module.exports = {
  getAllSales,
  getSalesById,
  postSales,
  updateSale,
  deleteSale,
};