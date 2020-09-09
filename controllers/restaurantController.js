// Controlador restaurante

exports.getNewOrder = (req, res, next) => {
    res.send('Cliente autorizado con ID: ' + req.userId);
}