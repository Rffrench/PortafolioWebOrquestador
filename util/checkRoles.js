// Funciones para chequear el rol del usuario y ver si se le permite acceder al recurso o no

exports.checkIfCustomer = (roleId) => {
    if (roleId != 1) { // SI no es cliente el tipo de usuario, error
        const error = new Error('No tiene el rol necesario para acceder acá')
        error.statusCode = 403; // Forbidden
        throw error;
    }
}

exports.checkIfAdmin = (roleId) => {
    if (roleId != 2) { // SI no es cliente el tipo de usuario, error
        const error = new Error('No tiene el rol necesario para acceder acá')
        error.statusCode = 403; // Forbidden
        throw error;
    }
}

exports.checkIfWarehouse = (roleId) => {
    if (roleId != 3) { // SI no es cliente el tipo de usuario, error
        const error = new Error('No tiene el rol necesario para acceder acá')
        error.statusCode = 403; // Forbidden
        throw error;
    }
}

exports.checkIfFinance = (roleId) => {
    if (roleId != 4) { // SI no es cliente el tipo de usuario, error
        const error = new Error('No tiene el rol necesario para acceder acá')
        error.statusCode = 403; // Forbidden
        throw error;
    }
}

exports.checkIfKitchen = (roleId) => {
    if (roleId != 5) { // SI no es cliente el tipo de usuario, error
        const error = new Error('No tiene el rol necesario para acceder acá')
        error.statusCode = 403; // Forbidden
        throw error;
    }
}

