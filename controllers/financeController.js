
const axios = require('axios');
const checkRoles = require('../util/checkRoles'); 

exports.getIncomesView = (req, res, next) => {
    checkRoles.checkIfFinance(req.roleId); 
    res.status(200).send('Usuario de finanzas autorizado con ID: ' + req.userId);
}