const express = require('express');
const router = express.Router();

module.exports = services => {
  router.get('', (req, res) => {
    const params = {};
    if (req.query.between) {
      let dates = req.query.between.split(',');
      dates = [new Date(dates[0]), new Date(dates[1])];
      if (dates[0] > dates[1]) {
        res.status(400).send('Invalid date range.');
      }
      params['between'] = dates;
    }

    if (req.query.fsyms) {
      const fsyms = req.query.fsyms.split(',');
      if (fsyms.length < 1) {
        res.status(400).send('Invalid crypto currencies.');
      }
      params['fsyms'] = fsyms;
    }

    if (req.query.tsyms) {
      const tsyms = req.query.tsyms.split(',');
      if (tsyms.length < 1) {
        res.status(400).send('Invalid currencies.');
      }
      params['tsyms'] = tsyms;
    }

    services.db.cryptoHistory
      .list(params)
      // .then(histories => histories.map(history => {
      //   // FIXME: !!!
      //   history.serialize();
      // }))
      .then(histories => res.status(200).json(histories))
      .catch(err => res.status(400).send(err.message))
  });

  return router;
};
