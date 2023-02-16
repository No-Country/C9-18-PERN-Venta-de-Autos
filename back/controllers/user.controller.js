const createHttpError = require("http-errors");
const { endpointResponse } = require("../helpers/success");
const { catchAsync } = require("../helpers/catchAsync");
const UserServices = require("../services/users.services");
const { request } = require("express");
const { createJwt } = require("../helpers");
const sendVerificationEmail = require("../utils/sendVerificationEmail");

// example of a controller. First call the service, then build the controller method
module.exports = {
  register: catchAsync(async (req, res, next) => {
    const body = req.body;

    const { email, firstName, lastName, password } = req.body;
    // Validacion temporal, despues se usara express validator
    if (!email || !firstName || !lastName || !password) {
      return next(
        createHttpError(400, "Por favor ingrese todos los datos necesarios")
      );
    }

    const [response, created] = await UserServices.registerUser(body);
    if (!created) {
      return next(
        createHttpError(400, "Este email o telefono ya esta registrado")
      );
    }

    const origin = "http://localhost:5000";
      await sendVerificationEmail({
        name: response.dataValues.firstName,
        email: response.dataValues.email,
        verificationToken: response.dataValues.verificationToken,
        origin,
      });

    const {verificationToken, ...userInfo} = response.dataValues

    const tokenUser = createJwt({ payload: userInfo });
    endpointResponse({
      res,
      code: 201,
      message: "Usuario creado con exito",
      body: {
        token: tokenUser,
      },
    });

    // try {
    //   const body = req.body;
    //   const result = await UserServices.registerUser(body);
    //   endpointResponse({
    //     res,
    //     message: "User register successfully",
    //     body: result,
    //     code: 201,
    //   });
    // } catch (error) {
    //   const httpError = createHttpError(
    //     error.statusCode,
    //     `[Error retrieving index] - [index - GET]: ${error.message}`
    //   );
    //   next(httpError);
    // }
  }),

  getAll: catchAsync(async (req, res, next) => {
    try {
      const result = await UserServices.findUsers();
      endpointResponse({
        res,
        message: "Find users successfully",
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
        message: "Find user by Id successfully",
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
        message: "Update user successfully",
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
        message: "Delete user successfully",
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

  verifyUser: catchAsync(async (req, res, next) => {
    const { token, email } = req.query;

    const user = await UserServices.findUserByEmail(email);

    if (user.verificationToken !== token)
      throw new Error("el token no es correcto");

    user.verified = true;

    await user.save();

    const { password: pass, verificationToken, ...userInfo } = user.dataValues;

    endpointResponse({
      res,
      message: "Usuario verificado con exito",
      body: userInfo,
      code: 200,
    });
  }),
};
