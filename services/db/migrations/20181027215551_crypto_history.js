exports.up = function(knex, Promise) {
  return knex.schema.createTable('crypto_history', table => {
    table.increments()
      .index();
    table.timestamp('created_at')
      .notNullable()
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('crypto_history');
};
