module.exports = (knex, AlarmSet) => {
  return params => {
    const querySet = knex('alarm_set')
      .where('id', params.id)
      .then(alarmSets => new AlarmSet(alarmSets[0]))
      .catch(err => {
        throw err
      });

    return querySet;
  };
};
