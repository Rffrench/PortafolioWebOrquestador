const express = require('express');
const router = express.Router();

const financeController = require('../controllers/financeController');
const isAuth = require('../middleware/isAuth');

router.get('/income', isAuth, financeController.getIncomeView);
router.get('/income', financeController.getIncomeDates);
router.get('/income/:month/:year', financeController.getDailyIncome);
module.exports = router;