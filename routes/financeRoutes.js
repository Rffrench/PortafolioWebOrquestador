const express = require('express');
const router = express.Router();

const financeController = require('../controllers/financeController');
const isAuth = require('../middleware/isAuth');

router.get('/incomes', isAuth, financeController.getIncomesView);
module.exports = router;