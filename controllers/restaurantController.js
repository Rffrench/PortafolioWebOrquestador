// Controlador restaurante

// Toda API REST debe enviar siempre el código HTTP de respuesta dependiendo el resultado de esta. Por ej: 201 se creó algo, 403 Forbidden, 200 OK, etc

const checkUserRole = require('../util/checkUserRole');


exports.getReservations = (req, res, next) => {
    checkUserRole(req.roleId);
    res.status(200).send('Cliente autorizado con ID: ' + req.userId);
}

exports.getNewReservation = (req, res, next) => {
    checkUserRole(req.roleId);
    res.status(200).send('Cliente autorizado con ID: ' + req.userId);
}




// Orders

exports.getOrders = (req, res, next) => {
    checkUserRole(req.roleId);
    res.status(200).send('Cliente autorizado con ID: ' + req.userId);
}

exports.getNewOrder = (req, res, next) => {
    checkUserRole(req.roleId);
    res.status(200).send('Cliente autorizado con ID: ' + req.userId);
}

