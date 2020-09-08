// MIddleware que se ejecuta antes de cada ruta que necesite verificar Autorización o Autenticación. Siempre se crea uno

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        const error = new Error('Not authenticated.');
        error.statusCode = 401;
        throw error;
    }
    const token = authHeader.split(' ')[1]; // Bearer va primero y luego el token
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'llavetoken'); // El secret debería ir en un ENV
    } catch (err) {
        err.statusCode = 500;
        throw err;
    }
    if (!decodedToken) {
        const error = new Error('Not authenticated.');
        error.statusCode = 401;
        throw error;
    }
    req.userId = decodedToken.userId;
    // agregar role ID
    next();
};