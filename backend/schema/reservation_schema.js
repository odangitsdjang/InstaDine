const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  user_id: Number
});

module.exports = reservationSchema;