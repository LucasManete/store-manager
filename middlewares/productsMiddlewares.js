const shema = require('../joi/JoiTestsProducts');

const validateProductsMiddleware = (req, res, next) => {
  const { error } = shema.validate(req.body);
  const { name, quantity } = req.body;
  if (!name || !quantity) {
    const erros = error.message;
    return res.status(400).json({ message: erros });
  }
  if (name.length < 5 || quantity <= 0) {
    const erros = error.message;
    return res.status(422).json({ message: erros });
  }
  next();
};

module.exports = validateProductsMiddleware;