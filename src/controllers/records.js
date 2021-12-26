const { recordService } = require('../services');
const { AppError }      = require('../utils/classes');

async function getRecords(req, res, next) {
  try {
    const { body: filter }  = req;
    const records           = await recordService.findByDateAndTotalCount(filter);

    res.status(200).json({
      results: records.length,
      code: 0,
      msg: 'success',
      records
    });
  } catch (e) {
    next(new AppError(500, 'Something went wrong.'));
  }
}

module.exports = {
  getRecords
}