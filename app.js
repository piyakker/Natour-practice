const express = require('express');
const indexRouter = require('./routes/index');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

// middlewares
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
};
app.use(express.json());

// routes
app.use('/api/v1', indexRouter);

app.all('*', (req, res, next) => {

  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
