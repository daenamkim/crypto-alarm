class AlarmSet {
  constructor(record) {
    this.id = record.id;
  }
}

module.exports = (knex) => {
  return {
    create: require('./create')(knex, AlarmSet),
    update: require('./update')(knex, AlarmSet),
    get: require('./get')(knex, AlarmSet),
    list: require('./list')(knex, AlarmSet),
    delete: require('./delete')(knex, AlarmSet)
  };
};
