const Joi         = require('joi');
const {
  joiErrorHandler
}                 = require('../../utils/functions');

const getRecordsSchema = Joi.object({
  startDate: Joi
    .date()
    .iso()
    .required()
    .error(joiErrorHandler),

  endDate: Joi
    .date()
    .iso()
    .min(Joi.ref('startDate'))
    .required()
    .error(joiErrorHandler),

  minCount: Joi
    .number()
    .min(0)
    .strict()
    .required()
    .error(joiErrorHandler),

  maxCount: Joi
    .number()
    .min(Joi.ref('minCount'))
    .strict()
    .required()
    .error(joiErrorHandler),

});

module.exports = getRecordsSchema;