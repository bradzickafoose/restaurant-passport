exports.seed = function(knex, Promise) {
// Deletes ALL existing entries
  return knex('cities').insert(
    [
      {
        "id": 1,
        "name": "Orlando"
      },
      {
        "id": 2,
        "name": "Los Angeles"
      },
      {
        "id": 3,
        "name": "New York"
      },
      {
        "id": 4,
        "name": "Miami"
      },
      {
        "id": 5,
        "name": "San Francisco"
      },
      {
        "id": 6,
        "name": "Boston"
      }
    ]
  );
};