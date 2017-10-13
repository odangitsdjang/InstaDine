const jwt = require('jwt-simple');
const config = require('../config');
const User = require('../models/user');

exports.updateUser = function(req, res, next) {
  const userToken = req.body.userToken;
  const userId = jwt.decode(userToken, config.secret).sub;

  User.findOneAndUpdate(
<<<<<<< HEAD
    {_id: userId},
    req.body.user,
    function (userError, updatedUser) {
      console.log(updatedUser, "++++++++++++++++++++++=");
      console.log(userError, "++++++++++++++++++++++=");
=======
    { _id: userId},
    { $set: req.body.user },
    { new: true },
    function (userError, updatedUser) {
      
>>>>>>> 134c2daea3eb95242230538c1a456ee6b60568e8
      if (userError) { return next(userError); }

      res.json(updatedUser);
    }
  );
};