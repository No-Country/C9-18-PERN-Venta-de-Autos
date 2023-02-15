const createHttpError = require('http-errors');
const { endpointResponse } = require('../helpers/success');
const { catchAsync } = require('../helpers/catchAsync');
const UserServices = require('../services/users.services');
const { request } = require('express');

// example of a controller. First call the service, then build the controller method
module.exports = {
  register: catchAsync(async (req, res, next) => {
    try {
      const body = req.body;
      const result = await UserServices.registerUser(body);
      endpointResponse({
        res,
        message: 'User register successfully',
        body: result,
        code: 201,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),

  getAll: catchAsync(async (req, res, next) => {
    try {
      const result = await UserServices.findUsers();
      endpointResponse({
        res,
        message: 'Find users successfully',
        body: result,
        code: 200,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),

  getId: catchAsync(async (req = request, res, next) => {
    try {
      const { id } = req.params;
      const result = await UserServices.findUserById(id);
      endpointResponse({
        res,
        message: 'Find user by Id successfully',
        body: result,
        code: 200,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),

  update: catchAsync(async (req = request, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const result = await UserServices.updateUser(id, body);
      endpointResponse({
        res,
        message: 'Update user successfully',
        body: result,
        code: 200,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),

  deleteUser: catchAsync(async (req = request, res, next) => {
    try {
      const { id } = req.params;
      const result = await UserServices.deleteUser(id);
      endpointResponse({
        res,
        message: 'Delete user successfully',
        body: result,
        code: 200,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),

  verifyUser: catchAsync(async(req, res, next)=>{
    try{

    }catch(error){
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`
      );
      next(httpError);
    }
  })
};
