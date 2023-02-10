const Cars = require("../models/cars.model");
const Users = require("../models/users.model");


class CarServices {
    static async getVehicles() {
        try {
            const allCars = await Cars.findAll({
                include: {
                    model: Users,
                    attributes: ["fristName", "lastName"]
                }
            });
            return allCars;
        } catch (error) {
            throw error;
        }
    }
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