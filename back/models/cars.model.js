const { DataTypes } = require('sequelize');
const db = require("../utils/database");

const Cars = db.define("cars", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },

      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isValidYear(value) {
            if (value < 1900 || value > new Date().getFullYear()) {
              throw new Error('Year must be between 1900 and current year');
            }
          },
        },
      },

      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      version: {
        type: DataTypes.STRING,
      },

      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      transmission: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      doors: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      engine_capacity: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      km: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      last_plate: {
        type: DataTypes.INTEGER,
      },

      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
      },

      seller_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      type: {
        type: DataTypes.ENUM,
        values: [
          'sedan',
          'suv',
          'hatchback',
          'crossover',
          'coupe',
          'pick_up',
          'roadster',
          'minivan',
        ],
        allowNull: false,
      },

      fuel: {
        type: DataTypes.ENUM,
        values: [
          'petrol',
          'diesel',
          'gas',
          'micro_hybrid',
          'mild_hybrid',
          'hybrid_electric',
          'electric',
        ],
        allowNull: false,
      },
});

module.exports = Cars;