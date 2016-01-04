exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('players').del(),

    // Inserts seed entries
    knex('players').insert({
      first_name: 'John',
      last_name: 'Elway',
      start_date: '6/28/1977',
      jersey_number: 7
    }),
    knex('players').insert({
      first_name: 'John',
      last_name: 'Belway',
      start_date: '6/28/1997',
      jersey_number: 25
    }),
    knex('players').insert({
      first_name: 'John',
      last_name: 'Delway',
      start_date: '6/28/1987',
      jersey_number: 67
    })
  );
};
