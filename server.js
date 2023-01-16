const mongoose = require('mongoose');
const app = require('./app.js');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})
  .then(() => console.log('mongodb connected!'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// handle all promise rejections
process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  // wait until all pending request finish, then shut down server
  server.close(() => {
    process.exit(1);
  });
});