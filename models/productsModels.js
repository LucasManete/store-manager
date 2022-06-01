const connection = require('./connection');

const getAllProducts = () => connection.execute(
  'SELECT * FROM StoreManager.products',
  );

const getProductsById = (id) => connection.execute(
  'SELECT * FROM StoreManager.products WHERE id = ?', [id],
);

const getByName = async (name) => {
  const [row] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE name = ?', [name],
    );
    return row;
};

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

const putProducts = async ({ name, quantity, id }) => {
  const [row] = await connection.execute(
    'UPDATE StoreManager.products SET name = ?, quantity = ? WHERE id = ?', [name, quantity, id],
  );
  return row;
};

const deleteProduct = async (id) => {
    await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?', [id],
  );
};

module.exports = {
  getAllProducts,
  getProductsById,
  postProduct,
  putProducts,
  deleteProduct,
  getByName,
};