const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
const bcrypt = require('bcryptjs');

const User = sequelize.define('User', {
    username: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { 
        type: DataTypes.ENUM('Admin', 'Base Commander', 'Logistics Officer'), 
        allowNull: false 
    }
});

User.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
});

module.exports = User;