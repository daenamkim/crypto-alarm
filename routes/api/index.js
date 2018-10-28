const express = require('express');
const router = express.Router();
const v1Router = require('./v1');

module.exports = services => {
  router.use('/v1', v1Router(services));

  return router;
};
