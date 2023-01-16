const fs = require('fs');
const mongoose = require('mongoose');
const Tour = require('../tourModel');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})
  .then(() => console.log('mongodb connected'));

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../../data/tours-simple.json`, 'utf8')
  );

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data created!');
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data deleted!');
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}