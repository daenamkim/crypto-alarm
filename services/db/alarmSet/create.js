module.exports = (knex, AlarmSet) => {
  return params => {
    return knex('alarm_set')
      .insert({
        title: params.title,
        fsym: params.fsym.toUpperCase(),
        tsym: params.tsym.toUpperCase(),
        price: params.price, // TODO: casting?
        option: params.option,
        enable: params.enable
      })
      .then(() => {
        return knex('alarm_set')
          .orderBy('id', 'desc')
          .limit(1);
      })
      .then(alarmSets => new AlarmSet(alarmSets[0]))
      .catch(err => {
        throw err;
      });
  };
};
