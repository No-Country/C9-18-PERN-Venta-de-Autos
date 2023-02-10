const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');
const CarServices = require('../services/cars.services');

// example of a controller. First call the service, then build the controller method
module.exports = {
  post: catchAsync(async (req, res, next) => {
    try {
      const newCar = req.body;
      const result = await CarServices.addVehicle(newCar);
      endpointResponse({
        res,
        message: 'Car added successfully',
        body: result,
        code: 201 
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),
  get: catchAsync(async (req, res, next) => {
    try {
      const result = await CarServices.getVehicles();
      endpointResponse({
        res,
        message: 'Vehicles listed successfully',
        body: result,
        code: 200
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),
  getVehiclesBySellerId: catchAsync(async (req, res, next) => {
    try {
      const {seller_id} = req.params;
      const result = await CarServices.getBySellerId(seller_id);
      endpointResponse({
        res, 
        message: "Vehicles listed successfully",
        body: result,
        code: 200
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retreiving index] - [index - GET]: ${error.message}`
      );
      next(httpError);
    }
  })
};