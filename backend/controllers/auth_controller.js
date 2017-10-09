const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

function userToken(user){
  let timestamp = new Date().getTime();
  return jwt.encode({
    sub: user.id,
    iat: timestamp
  }, config.secret);
}

exports.signin = function(req, res, next) {
  let user = req.user;
  res.send({
    token: userToken(user),
    user_id: user._id
  });
};

exports.signup = function(req, res, next) {
  //these are same as user_params 
  let email = req.body.email;
  let password = req.body.password;
  // if(!email || !password){
  //   return res.status(422).json({
  //     error: "You must provide an email and password"
  //   });
  // }

  User.findOne({email: email}, function(err, extistingUser) {
    if(err) { return next(err); }
    if(extistingUser) { return resizeBy.status(422).json({error: "Email taken"}); }
    let user = new User({
      email: email,
      password: password
    });
    user.save(function(error) {
      if(error) { return next(error); }
      res.json({user_id: user._id, token: userToken(user)});
    });
  });
};