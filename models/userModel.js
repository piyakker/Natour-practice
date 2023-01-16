const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name.'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email.'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'Please provide a password.'],
    minLength: [8, 'password should have more than 8 charactors'],
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password.'],
  },
});

module.exports = mongoose.model('User', userSchema);