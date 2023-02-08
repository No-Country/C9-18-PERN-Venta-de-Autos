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
        code: 201 // en este caso es 201 porque es un post, se debe cambiar según el tipo de petición
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),
};