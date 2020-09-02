const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('portafoliodb', 'root', 'portafolio-caso3', {
    dialect: 'mysql',
    host: 'portafoliodb.ctwlwjgq1z3t.us-east-1.rds.amazonaws.com',
    port: 3306
})


module.exports = sequelize;