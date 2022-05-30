const express = require('express');
// const rescue = require('express-rescue');

const router = express.Router();
const validateProducts = require('./middlewares/productsMiddlewares');

const productsControllers = require('./controllers/productsControllers');
const salesControllers = require('./controllers/salesControllers');

router.get('/products/:id', productsControllers.getProductIDController);
router.get('/products', productsControllers.getAllProductsController);
router.get('/sales/:id', salesControllers.getSalesById);
router.get('/sales', salesControllers.getAllSales);

router.post('/products', validateProducts, productsControllers.postProducts);

router.put('/products/:id', productsControllers.putProducts);

router.delete('/products/:id', productsControllers.deleteProduct);

router.post('/sales', salesControllers.postSales);
module.exports = router;