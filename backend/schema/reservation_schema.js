const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/user');
const Restaurant = require('../models/restaurant');

const reservationSchema = new Schema({
  restaurant_id: {
    type: String,
    required: 'Restaurant id is required'
  },
  user_id: {
    type: String,
    required: 'User id is required'
  },
  seat_count: {
    type: Number,
    required: 'Number of seats is required'
  },
  status: {
    type: String,
    default: 'Pending',
    required: true
  },
  datetime: {
    type: Date,
    required: 'Date time is required'
  },
  priority: {
    type: Number,
    default: 0,
    required: true
  } // Priority is higher for reservations made ahead of time
},
{ timestamps: true }
);

// After reservation saves, push res to restaurant queue & update user res
reservationSchema.pre('save', function(next){
  const reservation = this;
  Restaurant.findOneAndUpdate(
    { _id: reservation.restaurant_id.toString() }, 
    { $push: { queue: reservation } },
    { new: true },
    function (restaurantError, updatedRestaurant) {
      if (restaurantError) { 
        return next(restaurantError); 
      }

      User.findOneAndUpdate(
        { _id: reservation.user_id },
        { $push: {reservation: reservation } },
        { new: true },
        function (userError, user) {
          if (userError) { return next(userError); }
          next();
        }
      );
    }
  );
});

module.exports = reservationSchema;