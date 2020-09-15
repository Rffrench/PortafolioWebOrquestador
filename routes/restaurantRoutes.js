// Restaurant Routes
const express = require('express');
const router = express.Router();

const restaurantController = require('../controllers/restaurantController');
const isAuth = require('../middleware/isAuth');

// isAuth es un middleware que se ejecuta antes para verificar el token y si está autenticado el usuario o si tiene Autorización para acceder a ese recurso
router.get('/reservations', isAuth, restaurantController.getReservations)
router.get('/reservations/new', isAuth, restaurantController.getNewReservation);

router.get('/orders', isAuth, restaurantController.getOrders);
router.get('/orders/new', isAuth, restaurantController.getNewOrder)

module.exports = router;