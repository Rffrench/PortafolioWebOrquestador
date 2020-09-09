// Controlador Microservicio Autenticación
const User = require('../models/userModel');
const axios = require('axios');

// Toda API REST debe enviar siempre el código HTTP de respuesta dependiendo el resultado de esta. Por ej: 201 se creó algo, 403 Forbidden, 200 OK, etc

exports.postSignup = (req, res, next) => {
    const user = new User(req.body.email, req.body.username, req.body.password, req.body.name, req.body.lastName); // TODO: Deestructure!

    // Accediendo al microservicio de autenticación para registro
    axios.post(`${process.env.AUTH}/signup`, user)
        .then(response => {
            console.log(response);
            res.status(201).json(response.data); // response.data para que no haya problemas con el JSON

        })
        .catch(err => {
            console.log(err);
            next(err);
        })
}

exports.postLogin = (req, res, next) => {
    const user = { username: req.body.username, password: req.body.password }; // TODO: Deestructure!

    // Lo mismo que registro
    axios.post(`${process.env.AUTH}/login`, user)
        .then(response => {
            console.log(response.data);
            res.status(201).json(response.data); // response.data para que no haya problemas con el JSON

        })
        .catch(err => {
            console.log(err);
            next(err);
        })

}