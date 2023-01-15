const express = require('express');
const indexRouter = require('./routes/index');
const morgan = require('morgan');

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api/v1', indexRouter)

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
