const mongoose = require('mongoose');
const restaurantSchema = require('../schema/restaurant_schema');
const reservationSchema = require('../schema/reservation_schema');
// const jwt = require('jwt-simple');
const config = require('../config');

// ONLY FOR TESTING. REMEMBER TO REMOVE!!!
// mongoose.connect('mongodb://localhost:instaDine/instaDine');
// const Restaurant = mongoose.model('restaurant', restaurantSchema);
// ONLY FOR TESTING. REMEMBER TO REMOVE!!!

// Define restaurant schema
module.exports = mongoose.model('restaurant', restaurantSchema);

// // FOR TESTING RESTAURANT CREATE
// let restaurant = new Restaurant({
//   name: "Elaine's Kitchen 3",
//   address: {
//     street: '434 Broadway St',
//     city: 'San Francisco',
//     state: 'CA',
//     zip: 94133
//   },
//   manager_id: "59de73a07c9607384f29fc5a",
//   queue: [],
//   tables: {
//     max: 8,
//     current: [],
//     history: []
//   }
// });

// restaurant.save((error) => {
//   if (error) {
//     console.log(error);
//     console.log('Error occured');
//   }
//   else { console.log('Restaurant Saved'); }
// });