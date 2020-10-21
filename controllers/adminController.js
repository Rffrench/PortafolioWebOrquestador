// Administration controller

const axios = require('axios');
const checkRoles = require('../util/checkRoles'); // archivo importado que tiene funciones para chequear cada rol
// Productos de Ordenes


exports.putOrderProduct = (req, res, next) => {

    const [order, product, quantity] = [req.body.order, req.body.product, req.body.quantity]


    axios.put(`${process.env.ADMIN}/order-products/update`,
    {
        order:order,
        product:product,
        quantity:quantity
    })
        .then(response => {
            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status;
                next(err);
            } else {
                err.statusCode = 500;
                next(err);
            }
        })

}
exports.postOrderProduct = (req, res, next) => {
    const [order, product, quantity] = [req.body.order, req.body.product, req.body.quantity];


    axios.post(`${process.env.ADMIN}/order-products/new`,
        {
            order:order,
            product:product,
            quantity:quantity
        })
        .then(response => {
            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status;
                next(err);
            } else {
                err.statusCode = 500;
                next(err);
            }
        })

}


exports.deleteOrderProduct = (req, res, next) => {
    const order = req.params.order; 
    const product = req.params.product;

    axios.delete(`${process.env.ADMIN}/order-products/${order}/${product}`)
        .then(response => {
            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status;
                next(err);
            } else {
                err.statusCode = 500;
                next(err);
            }
        })

}

exports.putOrderStatus = (req, res, next) => {

    const order = req.params.order;


    axios.put(`${process.env.ADMIN}/order-products/${order}`,)
        .then(response => {
            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status;
                next(err);
            } else {
                err.statusCode = 500;
                next(err);
            }
        })

}

exports.getOrderProductsView = (req, res, next) => {
    checkRoles.checkIfWarehouse(req.roleId); 
    next();
}

exports.getOrderProducts = (req, res, next) => {
    const order = req.params.order;
    checkRoles.checkIfWarehouse(req.roleId); 
    axios.get(`${process.env.ADMIN}/order-products/${order}`)
        .then(response => {
            console.log(response.data);

            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status; // se modifica el codigo del error porque el frontend va a recibir esto, sino sería un 500 siempre
                next(err);
            } else {
                err.statusCode = 500;
                next(err);
            }
        })
}
//Ordenes de inventario

exports.getInventoryOrdersView= (req, res, next) => {
    checkRoles.checkIfWarehouse(req.roleId); 
    next();
}

exports.getInventoryOrder = (req, res, next) =>{
    const order = req.params.order;
    axios.get(`${process.env.ADMIN}/inventoryOrder/${order}`)
        .then(response => {
            console.log(response.data);

            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status; 
                next(err);
            } else {
                err.statusCode = 500;
                next(err);
            }
        })

}

exports.getInventoryOrders = (req, res, next) => {
    axios.get(`${process.env.ADMIN}/inventoryOrders`)
        .then(response => {
            console.log(response.data);

            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status; 
                next(err);
            } else {
                err.statusCode = 500;
                next(err);
            }
        })
}

exports.postInventoryOrder = (req, res, next) => {
    const [description, warehouseId] = [req.body.description, req.body.warehouseId];


    axios.post(`${process.env.ADMIN}/inventoryOrders`,
        {
            description:description,
            warehouseId: warehouseId
        })
        .then(response => {
            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status;
                next(err);
            } else {
                err.statusCode = 500;
                next(err);
            }
        })

}


// CLIENTES


// Obtener listado de cliente
exports.getCustomers = (req, res, next) => {
    axios.get(`${process.env.ADMIN}/customers`)
        .then(response => {
            console.log(response.data);

            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status; // se modifica el codigo del error porque el frontend va a recibir esto, sino sería un 500 siempre
                next(err);
            } else {
                err.statusCode = 500;
                next(err);
            }
        })
}

// Obtener un solo cliente
exports.getCustomer = (req, res, next) => {
    const userId = req.params.userId;

    axios.get(`${process.env.ADMIN}/customers/${userId}`)
        .then(response => {
            console.log(response.data);

            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status; // se modifica el codigo del error porque el frontend va a recibir esto, sino sería un 500 siempre
                next(err);
            } else {
                err.statusCode = 500;
                next(err);
            }
        })
}

exports.putCustomer = (req, res, next) => {

    const userId = req.params.userId;
    const [newEmail, newName, newLastName] = [req.body.newEmail, req.body.newName, req.body.newLastName];


    axios.put(`${process.env.ADMIN}/customers/${userId}`,
        {
            newEmail: newEmail,
            newName: newName,
            newLastName: newLastName
        })
        .then(response => {
            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status; // se modifica el codigo del error porque el frontend va a recibir esto, sino sería un 500 siempre
                next(err);
            } else {
                err.statusCode = 500;
                next(err);
            }
        })

}

exports.deleteCustomer = (req, res, next) => {
    const userId = req.params.userId;

    axios.delete(`${process.env.ADMIN}/customers/${userId}`)
        .then(response => {
            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status; // se modifica el codigo del error porque el frontend va a recibir esto, sino sería un 500 siempre
                next(err);
            } else {
                err.statusCode = 500;
                next(err);
            }
        })

}




// PRODUCTOS

exports.getProductsMenu = (req, res, next) => {
    checkRoles.checkIfWarehouse(req.roleId); // si no tiene el rol correcto lanza error
    next();
}

exports.getProductsView = (req, res, next) => {
    checkRoles.checkIfWarehouse(req.roleId); // si no tiene el rol correcto lanza error
    res.status(200).send('Bodeguero autorizado con ID: ' + req.userId);
}




exports.getProducts = (req, res, next) => {
    axios.get(`${process.env.ADMIN}/products`)
        .then(response => {
            console.log(response.data);

            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status; // se modifica el codigo del error porque el frontend va a recibir esto, sino sería un 500 siempre
                next(err);
            } else {
                err.statusCode = 500;
                next(err);
            }
        })
}

// Obtener un solo producto
exports.getProduct = (req, res, next) => {
    const productId = req.params.productId;

    axios.get(`${process.env.ADMIN}/products/${productId}`)
        .then(response => {
            console.log(response.data);

            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status; // se modifica el codigo del error porque el frontend va a recibir esto, sino sería un 500 siempre
                next(err);
            } else {
                err.statusCode = 500;
                next(err);
            }
        })
}

exports.postProduct = (req, res, next) => {
    const [name, quantity] = [req.body.name, req.body.quantity];


    axios.post(`${process.env.ADMIN}/products`,
        {
            name: name,
            quantity: quantity
        })
        .then(response => {
            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status; // se modifica el codigo del error porque el frontend va a recibir esto, sino sería un 500 siempre
                next(err);
            } else {
                err.statusCode = 500;
                next(err);
            }
        })

}

exports.putProduct = (req, res, next) => {

    const productId = req.params.productId;
    const [name, quantity] = [req.body.name, req.body.quantity];


    axios.put(`${process.env.ADMIN}/products/${productId}`,
        {
            name: name,
            quantity: quantity
        })
        .then(response => {
            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status; // se modifica el codigo del error porque el frontend va a recibir esto, sino sería un 500 siempre
                next(err);
            } else {
                err.statusCode = 500;
                next(err);
            }
        })

}

exports.deleteProduct = (req, res, next) => {
    const productId = req.params.productId;

    axios.delete(`${process.env.ADMIN}/products/${productId}`)
        .then(response => {
            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status; // se modifica el codigo del error porque el frontend va a recibir esto, sino sería un 500 siempre
                next(err);
            } else {
                err.statusCode = 500;
                next(err);
            }
        })

}






// MESAS

// Vista gestión de mesas
exports.getTablesView = (req, res, next) => {
    checkRoles.checkIfWaiter(req.roleId); // si no tiene el rol correcto lanza error
    next(); // continua a getTables pq son la misma ruta >> router.get('/tables')

    //res.status(200).send('Cliente autorizado con ID: ' + req.userId);
}

exports.getTables = (req, res, next) => {
    axios.get(`${process.env.ADMIN}/tables`)
        .then(response => {
            console.log(response.data);

            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status; // se modifica el codigo del error porque el frontend va a recibir esto, sino sería un 500 siempre
                next(err);
            } else {
                err.statusCode = 500;
                next(err);
            }
        })
}


exports.getTable = (req, res, next) => {
    const tableId = req.params.tableId;

    axios.get(`${process.env.ADMIN}/tables/${tableId}`)
        .then(response => {
            console.log(response.data);

            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status; // se modifica el codigo del error porque el frontend va a recibir esto, sino sería un 500 siempre
                next(err);
            } else {
                err.statusCode = 500;
                next(err);
            }
        })
}

exports.postTable = (req, res, next) => {
    const [capacity, isAvailable] = [req.body.capacity, req.body.isAvailable];


    axios.post(`${process.env.ADMIN}/tables`,
        {
            capacity: capacity,
            isAvailable: isAvailable
        })
        .then(response => {
            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status; // se modifica el codigo del error porque el frontend va a recibir esto, sino sería un 500 siempre
                next(err);
            } else {
                err.statusCode = 500;
                next(err);
            }
        })

}
// Modificar mesa o asignarla a un usuario
exports.putTable = (req, res, next) => {

    const tableId = req.params.tableId;
    const [capacity, isAvailable, customerId, waiterId] = [req.body.capacity, req.body.isAvailable, req.body.customerId, req.body.waiterId];


    axios.put(`${process.env.ADMIN}/tables/${tableId}`,
        {
            // some fields can be null
            capacity: capacity,
            isAvailable: isAvailable,
            customerId: customerId,
            waiterId: waiterId
        })
        .then(response => {
            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status; // se modifica el codigo del error porque el frontend va a recibir esto, sino sería un 500 siempre
                next(err);
            } else {
                err.statusCode = 500;
                next(err);
            }
        })

}

exports.deleteTable = (req, res, next) => {
    const tableId = req.params.tableId;

    axios.delete(`${process.env.ADMIN}/tables/${tableId}`)
        .then(response => {
            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status; // se modifica el codigo del error porque el frontend va a recibir esto, sino sería un 500 siempre
                next(err);
            } else {
                err.statusCode = 500;
                next(err);
            }
        })

}

// RECETAS

//Vista

exports.getRecipesMenu = (req, res, next) => {
    checkRoles.checkIfWarehouse(req.roleId); // si no tiene el rol correcto lanza error
    res.status(200).send('Bodeguero autorizado con ID: ' + req.userId);
}

exports.getRecipesView = (req, res, next) => {
    checkRoles.checkIfWarehouse(req.roleId); // si no tiene el rol correcto lanza error
    res.status(200).send('Bodeguero autorizado con ID: ' + req.userId);
}


//CRUD
exports.getRecipes = (req, res, next) => {
    axios.get(`${process.env.ADMIN}/recipes`)
        .then(response => {
            console.log(response.data);

            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status; // se modifica el codigo del error porque el frontend va a recibir esto, sino sería un 500 siempre
                next(err);
            } else {
                err.statusCode = 500;
                next(err);
            }
        })
}


exports.postRecipe = (req, res, next) => {
    const [name, description, cookingTime, userId] = [req.body.name, req.body.description, req.body.cookingTime, req.body.userId];  

    axios.post(`${process.env.ADMIN}/recipes`,
        {
            name: name,
            description: description,
            cookingTime: cookingTime,
            userId: userId
        })
        .then(response => {
            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status; // se modifica el codigo del error porque el frontend va a recibir esto, sino sería un 500 siempre
                next(err);
            } else {
                err.statusCode = 500;
                next(err);
            }
        })

}


exports.putRecipe = (req, res, next) => {

    const recipeId = req.params.recipeId;
    const [name, description, cookingTime] = [req.body.name, req.body.description, req.body.cookingTime];


    axios.put(`${process.env.ADMIN}/recipes/${recipeId}`,
        {
            name: name,
            description: description,
            cookingTime: cookingTime
        })
        .then(response => {
            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status; // se modifica el codigo del error porque el frontend va a recibir esto, sino sería un 500 siempre
                next(err);
            } else {
                err.statusCode = 500;
                next(err);
            }
        })

}

exports.deleteRecipe = (req, res, next) => {
    const recipeId = req.params.recipeId;

    axios.delete(`${process.env.ADMIN}/recipes/${recipeId}`)
        .then(response => {
            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status; // se modifica el codigo del error porque el frontend va a recibir esto, sino sería un 500 siempre
                next(err);
            } else {
                err.statusCode = 500;
                next(err);
            }
        })

}