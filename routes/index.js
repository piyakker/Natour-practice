const express = require('express');
const router = express.Router();

const toursRouter = require('./modules/toursRouter');

router.use('/tours', toursRouter);

module.exports = router;