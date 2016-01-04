
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('broncos', function(table){
      table.increments('id');
      table.string('first_name');
      table.string('last_name');
      table.date('dob');
      table.string('number');
    })

  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('broncos')
  ]);
};
