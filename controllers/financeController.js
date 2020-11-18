
const axios = require('axios');
const checkRoles = require('../util/checkRoles'); 

exports.getIncomeView = (req, res, next) => {
    checkRoles.checkIfFinance(req.roleId); 
    next();
}

exports.getIncomeDates = (req, res, next) => {

    axios.get(`${process.env.ADMIN}/finance/income/dates`)
        .then(response => {
            console.log(response.data);

            res.status(201).json(response.data);
        })
        .catch(err => {
            console.log(err.response);
            if (err.response) {
                err.statusCode = err.response.status; 
            } else {
                err.statusCode = 500;
                next(err);
            }
        })
}

exports.getDailyIncome = (req, res, next) => {
    const month=req.params.month;   
    const year=req.params.year;

    axios.get(`${process.env.ADMIN}/finance/income/${month}/${year}`)
    .then(response => {
        console.log(response.data);
        res.status(201).json(response.data);
    })
    .catch(err => {
        console.log(err.response);
        if (err.response) {
            err.statusCode = err.response.status; 
        } else {
            err.statusCode = 500;
            next(err);
        }
    })
}
