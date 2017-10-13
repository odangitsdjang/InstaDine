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

      res.json(updatedUser);
    }
  );
};