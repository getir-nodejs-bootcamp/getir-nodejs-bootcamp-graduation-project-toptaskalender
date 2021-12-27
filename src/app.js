const express             = require('express');
const morgan              = require('morgan');
const {
  requestLogStream
}                         = require('./logs');
const { 
  invalidEndpointHandler,
  errorHandler
}                         = require('./middlewares');
const { recordsRouter }   = require('./routes');

const app                 = express();

app.use(express.json());
app.use(morgan('combined', { stream: requestLogStream }));
app.use(morgan('dev'));

app.use('/records', recordsRouter);

app.all('*', invalidEndpointHandler);
app.use(errorHandler);

module.exports = app;