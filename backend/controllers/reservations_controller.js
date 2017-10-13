const Reservation = require('../models/reservation');
const jwt = require('jwt-simple');
const config = require('../config');

// Schema
// restaurant_id, user_id, seat_count, status, datetime, priority

exports.create = function(req, res, next) {
  const userToken = req.body.userToken;
  const userId = jwt.decode(userToken, config.secret).sub;
  // console.log(req.body);
  
  // Find if user already has a pending reservation
  Reservation.findOne({user_id: userId, status: 'Pending' }, 
    function(error, existingReservation){
      if (error) { return next(error); }
      if (existingReservation) {
        return res.status(422).json({error: 'You already have a reservation'});
      }

      const newReservation = new Reservation({
        restaurant_id: req.body.reservation.restaurant_id,
        user_id: userId,
        seat_count: req.body.reservation.seat_count,
        datetime: new Date(req.body.reservation.datetime)
      });

      newReservation.save(function(saveError){
        if (saveError) { return next(saveError); }

        res.json({reservation: newReservation});
      });
    }
  );
};

exports.update = function(req, res, next){
  // const userToken = req.body.userToken;
  // const userId = jwt.decode(userToken, config.secret).sub;
  // const userId = req.body;

  
};

