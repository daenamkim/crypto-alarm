module.exports = config => {
  const knex = require("knex")({
    client: config.client,
    connection: {
      host: config.connection.host,
      database: config.connection.database
    }
  });

  return {
    // user: require('./user')(knex),
    // alarmIntegration: require('./alarmIntegration')(knex),
    // alarmStatus: require('./alarmStatus')(knex),
    // alarmSet: require('./alarmSet')(knex),
    cryptoHistory: require('./cryptoHistory')(knex)
  };
};
