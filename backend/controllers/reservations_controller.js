const Reservation = require('../models/reservation');
const User = require('../models/user');
const Restaurant = require('../models/restaurant');
const jwt = require('jwt-simple');
const config = require('../config');

const newToken = user => {
  let timestamp = new Date().getTime();
  return jwt.encode({
    sub: user._id,
    iat: timestamp
  }, config.secret);
};

exports.create = function(req, res, next) {
  const userToken = req.body.userToken;
  const userId = jwt.decode(userToken, config.secret).sub;
  
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

        User.findById(userId, function(userError, user){
          if (userError) { return userError; }

          let currentUser = {
            email: user.email,
            username: user.username,
            phoneNumber: user.phoneNumber,
            user_id: user._id,
            profilePicture: user.profilePicture,
            properties: user.properties,
            reservation: user.reservation
          };

          res.json({currentUser, token: newToken(user)});
        });

      });
    }
  );
};

// exports.fetch = function(req, res, next) {
//   const userToken = req.query.userToken;
//   const userId = jwt.decode(userToken, config.secret).sub;
 
//   Reservation.findOne({user_id: userId, status: 'Pending'},
//   function(error, reservation){
//       if(error) {return next(error);}
//       if(reservation){
//           return res.json(reservation);
//       }
//     }
//   );
// };

exports.fetchHistory = function (req, res, next) {
  const userToken = req.query.userToken;
  const userId = jwt.decode(userToken, config.secret).sub;

  Reservation.find({ user_id: userId},
    function (error, reservation) {
      if (error) { return next(error); }
      if (reservation) {
        return res.json(reservation);
      }
    }
  );
};



exports.destroy = function(req, res, next){
  const userToken = req.body.userToken;
  const userId = jwt.decode(userToken, config.secret).sub;

  // Find the reservation and update to Cancel
  Reservation.findOneAndUpdate(
    { user_id: userId, status: 'Pending' },
    { $set: { status: 'Canceled ' } },
    { new: true },
    function (resvError, updatedResv) {
      if (resvError || !updatedResv) { 
        return res.status(404).json('Error: Unable to update Reservation'); 
      }

      const reservationId = updatedResv._id;
      const restaurantId = updatedResv.restaurant_id;

      // Find the restaurant and update
      Restaurant.findOne({ _id: restaurantId }, function(restError, restaurant) {
        if (restError || !restaurant) { 
          return res.status(404).json('Error updating restaurant'); 
        }
        if (restaurant) {
          // Remove reservation from restaurant queue
          const newQueue = restaurant.queue
            .filter(reservation => reservation._id.toString() !== reservationId.toString());

          restaurant.queue = newQueue;

          restaurant.save(function(restSaveError) {
            if (restSaveError) { 
              return res.status(404).json('Error updating restaurant'); 
            }
          });

          // Find the user and update reservation
          User.findOneAndUpdate(
            { _id: userId },
            { $set: { reservation: [] } },
            { new: true },
            function (error, updatedUser) {
              if (error || !updatedUser) { 
                return res.status(404).json('Error updating user'); 
              }
              
              let currentUser = {
                email: updatedUser.email,
                username: updatedUser.username,
                phoneNumber: updatedUser.phoneNumber,
                user_id: updatedUser._id,
                profilePicture: updatedUser.profilePicture,
                properties: updatedUser.properties,
                reservation: updatedUser.reservation
              };

              res.send({ currentUser, token: newToken(updatedUser) });
            }
          );
        }
      }
    );
  });
};

