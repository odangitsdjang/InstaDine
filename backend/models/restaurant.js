const mongoose = require('mongoose');
const restaurantSchema = require('../schema/restaurant_schema');

mongoose.connect('mongodb://localhost:instaDine/instaDine');

// Post save, update current user record to add new restaurant._id
// restaurantSchema.post('save', )

// FOR TESTING RESTAURANT CREATE
// let restaurant = new Restaurant({
//   name: "Elaine's Kitchen",
//   address: {
//     street: '434 Broadway St',
//     city: 'San Francisco',
//     state: 'CA',
//     zip: 94133
//   },
//   manager: "Jerry Lau",
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
//   else { console.log('User saved');    }
// });

module.exports = mongoose.model('restaurant', restaurantSchema);