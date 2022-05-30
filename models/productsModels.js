const connection = require('./connection');

const getAllProducts = () => connection.execute(
  'SELECT * FROM StoreManager.products',
  );

const getProductsById = (id) => connection.execute(
  'SELECT * FROM StoreManager.products WHERE id = ?', [id],
);

const postProduct = async (name, quantity) => {
 const [row] = await connection.execute(
    'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?)', [name, quantity],
    );
    const result = {
      id: row.insertId,
      name,
      quantity,
    };
    return result;
};

module.exports = {
  getAllProducts,
  getProductsById,
  postProduct,
};