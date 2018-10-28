module.exports = (knex, AlarmSet) => {
  return params => {
    // TODO: check id exists.
    return knex('alarm_set')
      .where({id: params.id})
      .update({
        title: params.title,
        fsym: params.fsym.toUpperCase(),
        tsym: params.tsym.toUpperCase(),
        enable: params.enable,
        updated_at: new Date()
      })
      .then(() => {
        return knex('alarm_set')
          .where({id: params.id});
      })
      .then(alarmSets => {
        return new AlarmSet(alarmSets[0]);
      })
      .catch(err => {
        throw err;
      });
  };
};
