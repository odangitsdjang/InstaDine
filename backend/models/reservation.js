const mongoose = require('mongoose');
const reservationSchema = require('../schema/reservation_schema');

module.exports = mongoose.model('reservation', reservationSchema);