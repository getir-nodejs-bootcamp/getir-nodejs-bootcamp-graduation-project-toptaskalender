const express             = require('express');
const morgan              = require('morgan');
const helmet              = require('helmet');
const {
  requestLogStream
}                         = require('./logs');
const { 
  invalidEndpointHandler,
  errorHandler
}                         = require('./middlewares');
const { recordsRouter }   = require('./routes');

const app                 = express();

app.use(helmet());
app.use(express.json());
app.use(morgan('combined', { stream: requestLogStream }));
app.use(morgan('dev'));

app.use('/api/v1/records', recordsRouter);

app.all('*', invalidEndpointHandler);
app.use(errorHandler);

module.exports = app;