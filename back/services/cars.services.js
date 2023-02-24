const { where } = require("sequelize");
const Cars = require("../models/cars.model");
const Users = require("../models/users.model");
const checkPermissions = require("../utils/checkPermissions");

class CarServices {
  static async getVehicles() {
    try {
      const allCars = await Cars.findAll();
      return allCars;
    } catch (error) {
      throw error;
    }
  }

  static async findVehicleById(id) {
    try {
      const result = await Cars.findOne({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getBySellerId(seller_id) {
    try {
      const result = await Cars.findAll({
        where: { seller_id },
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
      console.log(error);
      throw error;
    }
  }
  static async updateVehicle(id, newInfo, reqUser) {
    try {
      const car = await Cars.findOne({ where: { id } });

      if (!car) {
        throw new Error("Vehículo no encontrado");
      }

      checkPermissions(reqUser, car.seller_id);

      await car.update(newInfo);

      return car;
    } catch (error) {
      throw error;
    }
  }
  static async deleteCar(id, reqUser) {
    try {
      const car = await Cars.findOne({ where: { id } });

      if (!car) {
        throw new Error("Vehículo no encontrado");
      }

      checkPermissions(reqUser, car.seller_id);

      await car.destroy();

      return `Vehiculo ${id} eliminado`;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CarServices;
