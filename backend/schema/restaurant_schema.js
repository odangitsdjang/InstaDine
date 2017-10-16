const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/user');
const MAPS_API_KEY = require('../api_key');
const axios = require('axios');

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: 'Name is required'
  },
  address: {
    street: {
      type: String,
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
  full_address: {
    type: String,
    unique: true,
    required: 'Address is required'
  },
  geo: {
    latitude: Number,
    longitude:  Number
  },
  phone_number: {
    type: String,
    required: 'Phone number is required',
    unique: 'Phone number is already registered'
  },
  manager_id: {
    type: String,
    required: 'Manager is required'
  },
  queue: [],
  wait_time: Number,
  seats_available: Number,
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
  },
  picture_url: String
},
{ timestamps: true }
);

// Add indices
restaurantSchema.index({ name: 1, address: 1 }, { unique: true });

// Pre save, get geocoding for address
restaurantSchema.pre('validate', function(next) {
  const restaurant = this;
  const street = restaurant.address.street.split(' ').join('+');
  const city = restaurant.address.city.split(' ').join('+');
  const state = restaurant.address.state;
  const search = `${street},+${city},+${state}&key=${MAPS_API_KEY}`;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${search}`;

  // Make api request to google maps API for coordinates
  axios.get(url).then(response => {
    const fullAddress = response.data.results[0].formatted_address;
    const lat = response.data.results[0].geometry.location.lat;
    const long = response.data.results[0].geometry.location.lng;
    console.log(fullAddress,lat,long);

    restaurant.full_address = fullAddress;
    restaurant.geo.latitude = lat;
    restaurant.geo.longitude = long;
    next();
  }).catch(errors => {
    return next(errors);
  });
});

// Post save, update current user record to add new restaurant._id
restaurantSchema.post('save', function (restaurant) {
  User.findOneAndUpdate(
    { _id: restaurant.manager_id },
    { $push: { properties: restaurant._id } },
    { new: true },
    function (error, updatedUser) {
      if (error) { return error; }
    }
  );
});

module.exports = restaurantSchema;