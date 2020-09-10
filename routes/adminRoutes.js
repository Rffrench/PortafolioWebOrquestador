const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');

router.get('/customers', adminController.getCustomers);

router.get('/customers/:userId', adminController.getCustomer);

router.put('/customers/:userId', adminController.putCustomer);

router.delete('/customers/:userId', adminController.deleteCustomer);

module.exports = router;