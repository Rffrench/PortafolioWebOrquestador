// Controlador restaurante

// Toda API REST debe enviar siempre el código HTTP de respuesta dependiendo el resultado de esta. Por ej: 201 se creó algo, 403 Forbidden, 200 OK, etc

const axios = require('axios');
const checkRoles = require('../util/checkRoles'); // archivo importado que tiene funciones para chequear cada rol



// RESERVAS
// Vistas Reservas
exports.getReservationsMenu = (req, res, next) => {
    checkRoles.checkIfCustomer(req.roleId);
    res.status(200).send('Cliente autorizado con ID: ' + req.userId);
}

exports.getNewReservation = (req, res, next) => {
    checkRoles.checkIfCustomer(req.roleId);
    res.status(200).send('Cliente autorizado con ID: ' + req.userId);
}

// Endpoints reservas
exports.getReservations = (req, res, next) => {
    axios.get(`${process.env.RESTAURANT}/reservations`)
        .then(response => {
            console.log(response.data);

            res.status(201).json(response.data);
        })
        .catch(err => {
            next(err);
        })
}


exports.getReservation = (req, res, next) => {
    const userId = req.params.userId;

    axios.get(`${process.env.RESTAURANT}/reservations/${userId}`)
        .then(response => {
            console.log(response.data);

            res.status(201).json(response.data);
        })
        .catch(err => {
            next(err);
        })
}

exports.postReservation = (req, res, next) => {
    const [reservationDate, reservationTime, party, userId] = [req.body.reservationDate, req.body.reservationTime, req.body.party, req.body.userId];


    axios.post(`${process.env.RESTAURANT}/reservations`,
        {
            reservationDate: reservationDate,
            reservationTime: reservationTime,
            party: party,
            userId: userId
        })
        .then(response => {
            res.status(201).json(response.data);
        })
        .catch(err => {
            next(err);
        })

}

exports.deleteReservation = (req, res, next) => {
    const userId = req.params.userId;

    axios.delete(`${process.env.RESTAURANT}/reservations/${userId}`)
        .then(response => {
            res.status(201).json(response.data);
        })
        .catch(err => {
            next(err);
        })

}






// Orders

exports.getOrdersMenu = (req, res, next) => {
    checkRoles.checkIfCustomer(req.roleId);
    res.status(200).send('Cliente autorizado con ID: ' + req.userId);
}

exports.getNewOrder = (req, res, next) => {
    checkRoles.checkIfCustomer(req.roleId);
    res.status(200).send('Cliente autorizado con ID: ' + req.userId);
}

