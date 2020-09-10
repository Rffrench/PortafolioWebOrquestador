// Controlador restaurante

// Toda API REST debe enviar siempre el código HTTP de respuesta dependiendo el resultado de esta. Por ej: 201 se creó algo, 403 Forbidden, 200 OK, etc

exports.getNewReservation = (req, res, next) => {
    if (req.roleId != 1) { // SI no es cliente el tipo de usuario, error
        const error = new Error('No tiene el rol necesario para acceder acá')
        error.statusCode = 403; // Forbidden
        throw error;
    }
    res.status(200).send('Cliente autorizado con ID: ' + req.userId);
}

