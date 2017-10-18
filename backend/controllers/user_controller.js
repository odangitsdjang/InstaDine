const jwt = require('jwt-simple');
const config = require('../config');
const User = require('../models/user');

const newToken = user => {
  let timestamp = new Date().getTime();
  return jwt.encode({
    sub: user._id,
    iat: timestamp
  }, config.secret);
};

exports.updateUser = function(req, res, next) {
  const oldToken = req.body.userToken;
  const userId = jwt.decode(oldToken, config.secret).sub;

  User.findOneAndUpdate(
    { _id: userId},
    { $set: req.body.user },
    { new: true },
    function (userError, updatedUser) {
      if (userError) { return next(userError); }

      let currentUser = {
          email: updatedUser.email,
          username: updatedUser.username,
          phoneNumber: updatedUser.phoneNumber,
          user_id: updatedUser._id,
          profilePicture: updatedUser.profilePicture,
          properties: updatedUser.properties
      };
      return res.json({ currentUser: currentUser, token: newToken(updatedUser) });
    }
  );
};

exports.getUser = function(req, res, next) {
  const oldToken = req.params.token;
  const userId = jwt.decode(oldToken, config.secret).sub;

  User.findById(userId, function(error, user){
    if (error) { return(next(error)); }

    let currentUser = {
      email: user.email,
      username: user.username,
      phoneNumber: user.phoneNumber,
      user_id: user._id,
      profilePicture: user.profilePicture,
      properties: user.properties,
      reservation: user.reservation
    };

    return res.json({ currentUser, token: newToken(user) });
  });
};