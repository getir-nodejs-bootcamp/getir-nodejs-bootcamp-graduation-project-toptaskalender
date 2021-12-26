const { AppError } = require('../../utils/classes');

async function invalidEndpointHandler(req, res, next) {
  next(
    new AppError(
      404,
      `The requested endpoint ${req.method} ${req.originalUrl} was not defined on this server.`
    )
  );
}

module.exports = invalidEndpointHandler;