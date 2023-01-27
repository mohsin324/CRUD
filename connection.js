const { Sequelize } = require('sequelize');

const connection = new Sequelize('crudApp', 'sa', '123', {
    dialect: 'mssql',
    host: '127.0.0.1',
    port: '63837',

});

module.exports = connection