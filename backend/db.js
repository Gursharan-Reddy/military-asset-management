const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'database.sqlite'),
    logging: false
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        console.log('SQLite Military Database Operational');
    } catch (error) {
        console.error('Database Connection Failed:', error);
    }
};

module.exports = { sequelize, connectDB };