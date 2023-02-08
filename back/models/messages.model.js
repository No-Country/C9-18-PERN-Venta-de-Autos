const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Messages = db.define("messages", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sender_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    car_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

module.exports = Messages;