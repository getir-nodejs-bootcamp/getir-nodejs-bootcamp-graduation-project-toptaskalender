const { AppError } = require('../../utils/classes');

function validateAgainst(schema) {
  return async (req, res, next) => {
    const { body: payload } = req;

    const { error } = schema.validate(payload);

    console.log('validateAgainst error => ', error);
    
    if (error) {
      const message = error.details[0].message;

      return next(new AppError(400, message));
    }

    next();
  }
}

module.exports = validateAgainst;