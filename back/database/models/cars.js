const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'car',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
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
        references: {
          model: 'User',
          key: 'id',
        },
        allowNull: false,
      },

      published_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },

      updated_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
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
    },
    {
      timestamps: false,
    }
  );
};
