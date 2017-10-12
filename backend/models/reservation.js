const mongoose = require('mongoose');
const reservationSchema = require('../schema/reservation_schema');

// ONLY FOR TESTING. REMEMBER TO REMOVE!!!
// mongoose.connect('mongodb://localhost:instaDine/instaDine');
// const Reservation = mongoose.model('reservation', reservationSchema);
// ONLY FOR TESTING. REMEMBER TO REMOVE!!!

// FOR TESTING RESERVATION CREATE ONLY
// const reservation = new Reservation({
//   restaurant_id: '59de8cf699a51057f01deb47',
//   user_id: '59de73a07c9607384f29fc5a',
//   seat_count: 5,
//   datetime: Date.now(),
//   priority: 0
// });

// reservation.save(function(error) {
//   if (error) { console.log(error); }
//   else { console.log(reservation); }
// });

module.exports = mongoose.model('reservation', reservationSchema);