const AlarmIntegration = record => {
  this.id = record.id;
};

module.exports = (knex) => {
  return {
    create: require('./create')(knex, AlarmIntegration),
    update: require('./update')(knex, AlarmIntegration),
    get: require('./get')(knex, AlarmIntegration),
    list: require('./list')(knex, AlarmIntegration),
    delete: require('./delete')(knex, AlarmIntegration)
  };
};
