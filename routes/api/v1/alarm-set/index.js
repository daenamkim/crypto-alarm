const express = require('express');
const router = express.Router();

module.exports = services => {
  router.get('/:id', (req, res) => {
    services.db.alarmSet
      .get({id: req.params.id})
      .then(alarmSet => res.status(200).json(alarmSet))
      .catch(err => res.status(400).send(err.message));
  });

  router.get('', (req, res) => {
    services.db.alarmSet
      .list()
      .then(alarmSets => res.status(200).json(alarmSets))
      .catch(err => res.status(400).send(err.message));;
  });

  router.post('', (req, res) => {
    services.db.alarmSet
      .create(req.body)
      .then(alarmSet => res.status(201).json(alarmSet))
      .catch(err => res.status(400).send(err.message));;
  });

  router.patch('/:id', (req, res) => {
    services.db.alarmSet
      .update({
        id: req.params.id,
        title: req.body.title,
        fsym: req.body.fsym,
        tsym: req.body.tsym,
        price: req.body.price,
        option: req.body.option,
        enable: req.body.enable
      })
      .then(alarmSet => {
        res.status(200).json(alarmSet);
      })
      .catch(err => res.status(400).send(err.message));;
  });

  router.delete('/:id', (req, res) => {
    services.db.alarmSet
      .delete({id: req.params.id})
      .then(() => res.status(200).end())
      .catch(err => res.status(400).send(err.message));;
  });

  return router;
};
