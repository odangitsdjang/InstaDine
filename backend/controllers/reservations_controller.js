const Reservation = require('../models/reservation');

// Schema
// restaurant_id, user_id, seat_count, status, datetime, priority

exports.create = function(req, res, next) {
  const { user_id } = req.body;
  // Find if user already has a pending reservation
  Reservation.findOne({user_id, status: 'Pending' }, 
    function(error, existingReservation){
      if (error) { return next(error); }
      if (existingReservation) {
        return resizeBy.status(422).json({error: 'You already have a reservation'});
      }

      const newReservation = new Reservation(req.body);
      newReservation.save(function(saveError){
        if (saveError) { return next(saveError); }

        res.json({reservation: newReservation});
      });
    }
  );
};