exports.up = function(knex, Promise) {
  return knex.schema.createTable('alarm_set', table => {
    table.increments()
      .index();
    table.timestamp('created_at')
      .notNullable()
      .defaultTo(knex.fn.now());
    table.timestamp('updated_at')
      .notNullable()
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('alarm_set');
};
