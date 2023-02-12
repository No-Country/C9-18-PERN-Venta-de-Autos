const { where } = require("sequelize");
const Cars = require("../models/cars.model");
const Users = require("../models/users.model");


class CarServices {
    static async getVehicles() {
        try {
            const allCars = await Cars.findAll();
            return allCars;
        } catch (error) {
            throw error;
        }
    }
    static async getBySellerId(seller_id) {
        try {
            const result = await Cars.findAll({
                where: {seller_id: seller_id}
            });
            return result;
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
    static async updateVehicle(id, newInfo) {
        try {
            const result = await Cars.update(
                newInfo, {where: { id }}
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async deleteCar(id) {
        try {
            const result = Cars.destroy({
                where: { id }
            });
            return result;
        } catch (error) {
            throw (error);
        }
    }
};

module.exports = CarServices;