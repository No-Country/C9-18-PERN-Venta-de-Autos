const createHttpError = require("http-errors");
const { catchAsync, comparePassword, createJwt, endpointResponse } = require("../helpers");
const Users = require("../models/users.model");

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    const httpError = createHttpError(
      400,
      "Por favor ingrese email y password"
    );
    next(httpError);
  }

  const userFound = await Users.findOne({ where: { email } });
  if (!userFound) {
    const httpError = createHttpError(401, "Datos de acceso invalidos");
    next(httpError);
  }

  const passwordMatch = await comparePassword(password, userFound.password);
  if (!passwordMatch) {
    const httpError = createHttpError(401, "Datos de acceso invalidos");
    next(httpError);
  }

  const userInfo = {
    userId: userFound.id,
    email: userFound.email,
    firstName: userFound.firstName,
  };
  const token = createJwt({ payload: userInfo });

  endpointResponse({
    res,
    message: "Login exitoso",
    body: { userInfo, token },
    code: 200,
  });
});

module.exports = {login};
