exports.seed = function(knex, Promise) {
// Deletes ALL existing entries
  return knex('users').insert({ username: 'admin', password: 'admin', email: 'admin@email.com' });
};
