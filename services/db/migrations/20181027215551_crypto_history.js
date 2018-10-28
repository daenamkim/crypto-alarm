exports.up = function(knex, Promise) {
  return knex.schema.createTable('crypto_history', table => {
    table.increments()
      .index();

    table.string('fsym', 10)
      .notNullable()
      .index();;

    table.string('tsym', 10)
      .notNullable()
      .index();;

    table.timestamp('time', null, null)
      .notNullable()
      .index();;

    table.decimal('open', null, null)
      .notNullable();

    table.decimal('high', null, null)
      .notNullable();

    table.decimal('low', null, null)
      .notNullable();

    table.decimal('close', null, null)
      .notNullable();

    table.decimal('volume_from', null, null)
      .notNullable();

    table.decimal('volume_to', null, null)
      .notNullable();

    table.timestamp('created_at')
      .notNullable()
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('crypto_history');
};
