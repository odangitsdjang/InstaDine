const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

const userToken = user => {
  let timestamp = new Date().getTime();
  return jwt.encode({
    sub: user.id,
    iat: timestamp
  }, config.secret);
};

exports.login = function (req, res, next) {
  let user = req.user;
  res.send({ token: userToken(user), user_id: user._id });
};

exports.signup = function(req, res, next) {
  //these are same as user_params 
  let { email,
        password,
        username,
        phoneNumber } = req.body;

  User.findOne({email: email}, function(err, extistingUser) {
    if(err) { return next(err); }
    if(extistingUser) { return resizeBy.status(422).json({error: "Email taken"}); }
    let user = new User({
      email: email,
      password: password,
      username: username,
      phoneNumber: phoneNumber
    });
    user.save(function(err) {
      if(err) { return next(err); }
      res.json({user_id: user._id, token: userToken(user)});
    });
  });
};