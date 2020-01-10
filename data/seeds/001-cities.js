exports.seed = function(knex, Promise) {
// Deletes ALL existing entries
  return knex('cities').insert(
    [
      {
        "name": "Orlando"
      },
      {
        "name": "Los Angeles"
      },
      {
        "name": "New York"
      },
      {
        "name": "Miami"
      },
      {
        "name": "San Francisco"
      },
      {
        "name": "Boston"
      }
    ]
  );
};