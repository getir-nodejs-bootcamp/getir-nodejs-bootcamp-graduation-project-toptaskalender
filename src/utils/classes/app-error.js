class AppError extends Error {
  constructor(statusCode, message) {
    super(message);

    this.isOperational  = true;
    this.statusCode     = statusCode;
    this.code           = String(statusCode).startsWith('4') ? '1' : '2';
  }
}

module.exports = AppError;