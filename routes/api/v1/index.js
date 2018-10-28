const express = require('express');
const router = express.Router();
// const alarmRouter = require('./alarm');
const cryptoHistoryRouter = require('./crypto-history');

module.exports = services => {
  // router.use('/alarm', alarmRouter(services)),
  router.use('/crypto-history', cryptoHistoryRouter(services))

  return router;
};
