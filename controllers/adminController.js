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

    const productId = req.params.productId;
    const [newName, newQuantity] = [req.body.newName, req.body.newQuantity];


    axios.post(`${process.env.ADMIN}/products/${productId}`,
        {
            newName: newName,
            newQuantity: newQuantity
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