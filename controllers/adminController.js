const axios = require('axios');


// CLIENTES


// Obtener listado de cliente
exports.getCustomers = (req, res, next) => {
    axios.get(`${process.env.ADMIN}/customers`)
        .then(response => {
            console.log(response.data);

            res.status(201).json(response.data);
        })
        .catch(err => {
            next(err);
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
            next(err);
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
            next(err);
        })

}

exports.deleteCustomer = (req, res, next) => {
    const userId = req.params.userId;

    axios.delete(`${process.env.ADMIN}/customers/${userId}`)
        .then(response => {
            res.status(201).json(response.data);
        })
        .catch(err => {
            next(err);
        })

}




// PRODUCTOS

exports.getProducts = (req, res, next) => {
    axios.get(`${process.env.ADMIN}/products`)
        .then(response => {
            console.log(response.data);

            res.status(201).json(response.data);
        })
        .catch(err => {
            next(err);
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
            next(err);
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
            next(err);
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
            next(err);
        })

}

exports.deleteProduct = (req, res, next) => {
    const productId = req.params.productId;

    axios.delete(`${process.env.ADMIN}/products/${productId}`)
        .then(response => {
            res.status(201).json(response.data);
        })
        .catch(err => {
            next(err);
        })

}






// MESAS

exports.getTables = (req, res, next) => {
    axios.get(`${process.env.ADMIN}/tables`)
        .then(response => {
            console.log(response.data);

            res.status(201).json(response.data);
        })
        .catch(err => {
            next(err);
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
            next(err);
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
            next(err);
        })

}

exports.putTable = (req, res, next) => {

    const tableId = req.params.tableId;
    const [capacity, isAvailable, userId] = [req.body.capacity, req.body.isAvailable, req.body.userId];


    axios.put(`${process.env.ADMIN}/tables/${tableId}`,
        {
            capacity: capacity,
            isAvailable: isAvailable,
            userId: userId
        })
        .then(response => {
            res.status(201).json(response.data);
        })
        .catch(err => {
            next(err);
        })

}

exports.deleteTable = (req, res, next) => {
    const tableId = req.params.tableId;

    axios.delete(`${process.env.ADMIN}/tables/${tableId}`)
        .then(response => {
            res.status(201).json(response.data);
        })
        .catch(err => {
            next(err);
        })

}