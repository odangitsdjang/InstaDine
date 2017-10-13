const jwt = require('jwt-simple');
const config = require('../config');
const User = require('../models/user');

exports.updateUser = function(req, res, next) {
  const userToken = req.body.userToken;
  const userId = jwt.decode(userToken, config.secret).sub;

  User.findOneAndUpdate(
    { _id: userId},
    { $set: req.body.user },
    { new: true },
    function (userError, updatedUser) {
      if (userError) { return next(userError); }
      console.log(updatedUser, "===================");
      let currentUser = {
          email: updatedUser.email,
          username: updatedUser.username,
          phoneNumber: updatedUser.phoneNumber,
          user_id: updatedUser._id,
          profilePicture: updatedUser.profilePicture,
          properties: updatedUser.properties
      };
      console.log(currentUser, "===================");
      res.json({currentUser: currentUser});
    }
  );
};