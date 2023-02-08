const Cars = require("../models/cars.model");


class CarServices {
    static async addVehicle(newCar) {
        try {
            const result = Cars.create(newCar);
            return result;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = CarServices;