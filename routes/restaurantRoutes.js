// Restaurant Routes
const express = require('express');
const router = express.Router();

const restaurantController = require('../controllers/restaurantController');
const isAuth = require('../middleware/isAuth');

// isAuth es un middleware que se ejecuta antes para verificar el token y si está autenticado el usuario o si tiene Autorización para acceder a ese recurso

// Rutas vistas reservas para ver si se le carga la pag al usuario o no
router.get('/reservations/menu', isAuth, restaurantController.getReservationsMenu)
router.get('/reservations/new', isAuth, restaurantController.getNewReservation);
// CRD Reservas
router.get('/reservations', restaurantController.getReservations);
router.post('/reservations', restaurantController.postReservation);
router.get('/reservations/:userId', restaurantController.getReservation);
router.delete('/reservations/:userId', restaurantController.deleteReservation);


// Rutas vistas ordenes
router.get('/orders/menu', isAuth, restaurantController.getOrdersMenu);
router.get('/orders/new', isAuth, restaurantController.getNewOrder)



module.exports = router;