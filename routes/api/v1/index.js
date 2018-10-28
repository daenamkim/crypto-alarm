const express = require('express');
const router = express.Router();
const alarmSetRouter = require('./alarm-set');
const cryptoHistoryRouter = require('./crypto-history');

module.exports = services => {
  router.use('/alarm-set', alarmSetRouter(services)),
  router.use('/crypto-history', cryptoHistoryRouter(services))

  return router;
};
