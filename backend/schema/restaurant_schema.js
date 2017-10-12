const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reservationSchema = require('../schema/reservation_schema');

// Define restaurant schema
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
  manager: {
    type: String,
    required: 'Manager is required'
  },
  queue: [reservationSchema],
  tables: {
    max: {
      type: Number,
    required: 'Max tables is required'
    },
    current: [
      {
        table_number: Number,
        user_id: Number,
        reservation: reservationSchema,
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

module.exports =  restaurantSchema;