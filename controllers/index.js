const express = require('express');
const router = express.Router();

const errorHandler = require('./errorHandler');

router.use(errorHandler);

module.exports = router;
