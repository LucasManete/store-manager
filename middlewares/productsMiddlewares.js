const shema = require('../joi/JoiTestsProducts');

const validateProductsMiddleware = (req, res, next) => {
  const { error } = shema.validate(req.body);
  const validadeMessage = error.details[0].message;
  if (error.details[0].type === 'string.min' || error.details[0].type === 'number.min') {
    const [message] = error.details.map((errors) => errors.message);
    return res.status(422).json({ message });
  }
  res.status(400).json({ message: validadeMessage });
  next();
};

module.exports = validateProductsMiddleware;