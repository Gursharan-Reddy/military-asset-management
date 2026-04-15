const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Asset = sequelize.define('Asset', {
    assetName: { type: DataTypes.STRING, allowNull: false },
    type: { 
        type: DataTypes.ENUM('Vehicle', 'Weapon', 'Ammunition'), 
        allowNull: false 
    },
    quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
    base: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, defaultValue: 'Operational' }
});

module.exports = Asset;