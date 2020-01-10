exports.seed = function(knex, Promise) {
// Deletes ALL existing entries
  return knex('restaurants').insert(
    [
      {
        city_id: 1,
        "name": "Seito Sushi",
        description: "description goes here",
        address: '123 abc ave.'
      },
      {
        city_id: 1,
        "name": "Danketsu",
        description: "description goes here",
        address: '123 abc ave.'
      },
      {
        city_id: 1,
        "name": "Santiago's Bodega",
        description: "description goes here",
        address: '123 abc ave.'
      },
      {
        city_id: 1,
        "name": "The Stubborn Mule",
        description: "description goes here",
        address: '123 abc ave.'
      },
      {
        city_id: 1,
        "name": "Pig Floyd's Urban Barbakoa",
        description: "description goes here",
        address: '123 abc ave.'
      },
      {
        city_id: 1,
        "name": "Whisper Creek Farm: The Kitchen",
        description: "description goes here",
        address: '123 abc ave.'
      },
      {
        city_id: 1,
        "name": "Hungry Pants",
        description: "description goes here",
        address: '123 abc ave.'
      },
      {
        city_id: 1,
        "name": "Bar Harbor Seafood",
        description: "description goes here",
        address: '123 abc ave.'
      },
      {
        city_id: 1,
        "name": "Cuba Libre Restaurant & Rum Bar",
        description: "description goes here",
        address: '123 abc ave.'
      },
      {
        city_id: 2,
        "name": "Urth Caffé",
        description: "description goes here",
        address: '123 abc ave.'
      },
      {
        city_id: 2,
        "name": "Mashti Malone's Ice Cream",
        description: "description goes here",
        address: '123 abc ave.'
      },
      {
        city_id: 2,
        "name": "Bulletproof Coffee",
        description: "description goes here",
        address: '123 abc ave.'
      },
      {
        city_id: 2,
        "name": "Republique",
        description: "description goes here",
        address: '123 abc ave.'
      }
    ]
  );
};