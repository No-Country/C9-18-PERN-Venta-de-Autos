const createHttpError = require("http-errors");
const { catchAsync } = require("../helpers/catchAsync");
const { isTokenValid } = require("../helpers/createJwt");

const authenticateUser = catchAsync(async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    const httpError = createHttpError(401, "No hay un token presente");
    next(httpError);
  }

  const token = authHeader.split(" ")[1];
  try {
    const payloadDecoded = isTokenValid(token);
    req.user = { ...payloadDecoded };
    next();
  } catch (error) {
    const httpError = createHttpError(401, "El token no es valido");
    next(httpError);
  }
});


module.exports = {authenticateUser}