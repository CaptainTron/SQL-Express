const DBConfig = require("./database_config");
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(DBConfig.database, DBConfig.user, DBConfig.password, {
    host: DBConfig.server,
    dialect: 'mssql',
    port: DBConfig.port,
    protocol: DBConfig.protocol,
});

const Getconnect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
Getconnect();

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Task = require("../Models/Taskmodel.js")(sequelize, DataTypes);
db.sequelize.sync({ force: false })
    .then(() => console.log("Re-Sync Successful"))

module.exports = db;

