module.exports = (knex, AlarmSet) => {
  return params => {
    return knex('alarm_set')
      .where({id: params.id})
      .del()
      .catch(err => {
        throw err;
      });
  };
};
