const express = require('express');
const indexRouter = require('./routes/index');
const morgan = require('morgan');

const app = express();

// middlewares
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
};
app.use(express.json());

// routes
app.use('/api/v1', indexRouter);

module.exports = app;
