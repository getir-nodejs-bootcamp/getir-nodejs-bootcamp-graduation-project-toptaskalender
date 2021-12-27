const express             = require('express');
const { 
  invalidEndpointHandler,
  errorHandler
}                         = require('./middlewares');
const { recordsRouter }   = require('./routes');
const app                 = express();

app.use(express.json());

app.use('/records', recordsRouter);

app.all('*', invalidEndpointHandler);
app.use(errorHandler);

module.exports = app;