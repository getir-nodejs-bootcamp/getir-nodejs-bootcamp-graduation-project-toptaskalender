const { recordService } = require('../services');

async function getRecords(req, res, next) {
  try {
    const { body: filter }  = req;
    const records           = await recordService.findByDateAndTotalCount(filter);

    console.log('records length => ', records.length);

    res.status(200).json({
      code: 0,
      msg: 'success',
      records
    });
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getRecords
}