// Auth Microservice. 

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Database
const sequelize = require('./util/database');

// Routes
const authRoutes = require('./routes/authRoutes');

// Adding middleware (these are executed for every request)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Using the routes
app.use('/api/v1', authRoutes);


sequelize.sync()
    .then(result => {
        console.log(result);
        app.listen(5000);
    })
    .catch(err => {
        console.log(err);
    })
