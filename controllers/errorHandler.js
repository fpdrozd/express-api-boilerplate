const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  const err = new Error('The requested resource couldn\'t be found');
  err.status = 404;
  next(err);
});
router.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({ message: err.message });
});

module.exports = router;
