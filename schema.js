const { DataTypes } = require('sequelize');
const db = require('./connection');
const dataBase = db.define('Shopping', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    productName: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    storeName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    manuFactured: {
        type: DataTypes.STRING,
        allowNull: true
    },
    producedBy: {
        type: DataTypes.STRING,
        allowNull: true
    },
    postField:{
        type: DataTypes.STRING,
        allowNull: true

    }
},
{
    timestamps: false,
    updatedAt: false,
    createdAt: false,
    cstm_customerprofile: true
});

module.exports = dataBase