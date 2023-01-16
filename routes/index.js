const express = require('express');
const router = express.Router();

const toursRouter = require('./modules/toursRouter');
const usersRouter = require('./modules/usersRouter');

router.use('/tours', toursRouter);
router.use('/users', usersRouter);

module.exports = router;