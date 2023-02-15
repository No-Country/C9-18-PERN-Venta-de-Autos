const createHttpError = require("http-errors");
const {
  catchAsync,
  comparePassword,
  createJwt,
  endpointResponse,
} = require("../helpers");
const { loginUser } = require("../services/auth.services");

module.exports = {
  login: catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
      const httpError = createHttpError(
        400,
        "Por favor ingrese email y password"
      );
      next(httpError);
    }

    const userFound = await loginUser(email);
    if (!userFound) {
      const httpError = createHttpError(401, "Datos de acceso invalidos");
      next(httpError);
    }

    const passwordMatch = await comparePassword(password, userFound.password);
    if (!passwordMatch) {
      const httpError = createHttpError(401, "Datos de acceso invalidos");
      next(httpError);
    }

    const { password: pass, ...userInfo } = userFound.dataValues;
    const token = createJwt({ payload: userInfo });

    endpointResponse({
      res,
      message: "Login exitoso",
      body: { userInfo, token },
      code: 200,
    });
  }),
};
