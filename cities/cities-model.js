const knex = require('knex');
const knexConfig = require('../knexfile.js')
const db = require('../data/dbConfig');

module.exports = {
    addCity,
    getCities,
    getCityById,
    getRestaurants,
    getRestaurantById,
    addRestaurant,
    rateRestaurant
}

function addCity(city) {
    return db('cities')
        .insert(city, 'id')
}

function addRestaurant(restaurant) {
    return db('restaurants')
        .insert(restaurant, 'id')
}

function getCities() {
    return db('cities')
}

function getCityById(id) {
    return db('cities')
        .first()
        .where('cities.id', id)
}

function getRestaurants(id) {
    return db('restaurants')
        .join('cities', 'cities.id', 'restaurants.city_id')
        .select('restaurants.id as restID', 'restaurants.name as restName', 'restaurants.*')
        .where('restaurants.city_id', id)
}

function getRestaurantById(id) {
    return db('restaurants')
        .first()
        .where('restaurants.id', id)
}

async function rateRestaurant(id, rating) {
    await db('restaurants')
        .update({ rating })
        .where('restaurants.id', id);
    
    return getRestaurantById(id);
}