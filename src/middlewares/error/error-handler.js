async function errorHandler(err, req, res, next) {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      code: err.code,
      msg: err.message
    })
  } else {
    res.status(500).json({
      code: '2',
      msg: 'Something went wrong.'
    })
  }
}

module.exports = errorHandler;