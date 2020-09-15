// Función para chequear el rol del usuario y ver si se le permite acceder al recurso o no

const checkUserRole = (roleId) => {
    if (roleId != 1) { // SI no es cliente el tipo de usuario, error
        const error = new Error('No tiene el rol necesario para acceder acá')
        error.statusCode = 403; // Forbidden
        throw error;
    }
}

module.exports = checkUserRole;