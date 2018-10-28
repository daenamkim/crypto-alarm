module.exports = (knex, AlarmSet) => {
  return params => {
    const querySet = knex('alarm_set')
      .select()
      .then(alarmSets => alarmSets.map(alarmSet => new AlarmSet(alarmSet)))
      .catch(err => {
        throw err;
      });

    return querySet;
  };
};
