// MIddleware que se ejecuta antes de cada ruta que necesite Autenticación. Siempre se crea uno. Luego en el siguiente middleware se verifica el rol para ver si puede acceder a ese recurso

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization'); // Se obtiene el Header
    if (!authHeader) {
        const error = new Error('Not authenticated.');
        error.statusCode = 401;
        throw error;
    }
    const token = authHeader.split(' ')[1]; // Bearer va primero y luego el token se obtiene
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
    req.roleId = decodedToken.roleId;
    // agregar role ID
    next();
};