const express = require('express');

const router = express.Router();

const productsControllers = require('./controllers/productsControllers');
const salesControllers = require('./controllers/salesControllers');

router.use('/products/:id', productsControllers.getProductIDController);
router.use('/products', productsControllers.getAllProductsController);
router.use('/sales/:id', salesControllers.getSalesById);
router.use('/sales', salesControllers.getAllSales);
module.exports = router;