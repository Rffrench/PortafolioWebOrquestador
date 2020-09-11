const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');

// Customers
router.get('/customers', adminController.getCustomers);
router.get('/customers/:userId', adminController.getCustomer);
router.put('/customers/:userId', adminController.putCustomer);
router.delete('/customers/:userId', adminController.deleteCustomer);

// Products
router.get('/products', adminController.getProducts);
router.get('/products/:productId', adminController.getProduct);
router.post('/products/', adminController.postProduct);
router.put('/products/:productId', adminController.putProduct);
router.delete('/products/:productId', adminController.deleteProduct);

module.exports = router;