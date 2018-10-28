const express = require('express');
const router = express.Router();

module.exports = services => {
  router.get('/:id', (req, res) => {
    // TODO: params
    services.db.alarmSet
      .get();
    res.status(200).send('get with id');
  });

  router.get('', (req, res) => {
    // if there is no alarm id
    services.db.alarmSet
      .list();
    res.status(200).send('get list');
  });

  router.post('', (req, res) => {
    services.db.alarmSet
      .create();
    res.status(200).send('post');
  });

  router.patch('/:id', (req, res) => {
    services.db.alarmSet
      .update();
      res.status(200).send('patch with id');
  });

  router.delete('/:id', (req, res) => {
    services.db.alarmSet
      .delete();
    res.status(200).send('delete with id');
  });

  return router;
};
