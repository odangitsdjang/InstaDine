const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/user');

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: 'Name is required'
  },
  address: {
    street: {
      type: String,
      unique: "This address is already registered",
      required: 'Street is required'
    },
    city: {
      type: String,
      required: 'City is required'
    },
    state: {
      type: String,
      required: 'State is required'
    },
    zip: {
      type: Number,
      required: 'Zip code is required'
    }
  },
  phoneNumber: {
    type: String,
    required: 'Phone number is required',
    unique: 'Phone number is already registered'
  },
  manager_id: {
    type: String,
    required: 'Manager is required'
  },
  queue: [],
  tables: {
    max: {
      type: Number,
      required: 'Max tables is required'
    },
    current: [
      {
        table_number: Number,
        user_id: Number,
        reservation: [],
        timeIn: Date
      }
    ],
    history: [
      {
        table_number: Number,
        reservation_id: Number,
        timeIn: Number,
        timeOut: Number
      }
    ]
  }
},
{ timestamps: true }
);

// Add indices
restaurantSchema.index({ name: 1, address: 1 }, { unique: true });

// Post save, update current user record to add new restaurant._id
restaurantSchema.post('save', function (next) {
  const restaurant = this;
  User.findOneAndUpdate(
    { _id: restaurant.manager_id },
    { $push: { properties: restaurant._id } },
    function (error, updatedUser) {
      if (error) { return next(error); }
    }
  );
});

module.exports = restaurantSchema;