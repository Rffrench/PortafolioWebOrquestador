const axios = require('axios');


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