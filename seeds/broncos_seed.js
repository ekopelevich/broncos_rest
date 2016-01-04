exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('broncos').del(),

    // Inserts seed entries
    knex('broncos').insert({
      first_name: 'John',
      last_name: 'Elway',
      dob: '6/28/1957',
      number: '7'
    }),
    knex('broncos').insert({
      first_name: 'John',
      last_name: 'Belway',
      dob: '6/28/1957',
      number: '12'
    }),
    knex('broncos').insert({
      first_name: 'John',
      last_name: 'Delway',
      dob: '6/28/1957',
      number: '89'
    }),
    knex('broncos').insert({
      first_name: 'John',
      last_name: 'Helway',
      dob: '6/28/1957',
      number: '46'
    }),
    knex('broncos').insert({
      first_name: 'John',
      last_name: 'Telway',
      dob: '6/28/1957',
      number: '17'
    }),
    knex('broncos').insert({
      first_name: 'John',
      last_name: 'Alway',
      dob: '6/28/1957',
      number: '27'
    }),
    knex('broncos').insert({
      first_name: 'John',
      last_name: 'Smith',
      dob: '6/28/1957',
      number: '6'
    }),
    knex('broncos').insert({
      first_name: 'John',
      last_name: 'Jones',
      dob: '6/28/1957',
      number: '90'
    }),
    knex('broncos').insert({
      first_name: 'John',
      last_name: 'Gelway',
      dob: '6/28/1957',
      number: '73'
    })
  );
};
