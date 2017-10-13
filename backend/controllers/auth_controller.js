const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

const userToken = user => {
  let timestamp = new Date().getTime();
  return jwt.encode({
    sub: user._id,
    iat: timestamp
  }, config.secret);
};

exports.login = function (req, res, next) {
  let user = req.user;
  //find the user, if found, log that person in 
  User.findOne({email: user.email}, function(err, Founduser){
    if (err) { 
      return next(err); 
    }
    if (Founduser) { 
      //pull the wanted user data for session state
      let currentUser = {
        email: user.email,
        username: user.username,
        phoneNumber: user.phoneNumber,
        user_id: user._id,
        profilePicture: user.profilePicture,
        properties: user.properties
      };

      //send currentUser info back to frontend 
      return res.send({
        currentUser: currentUser,
        token: userToken(user)
      });
    }
  });
};

exports.signup = function(req, res, next) {
  //these are same as user_params 

  let { email,
        password,
        username,
        phoneNumber } = req.body;

  User.findOne({email: email}, function(err, extistingUser) {
    if(err) { 
      return next(err); 
    }
    if(extistingUser) { 
      return resizeBy.status(422).json({error: "Email taken"}); 
    }

    let user = new User({
      email: email,
      password: password,
      username: username,
      phoneNumber: phoneNumber
    });

    user.save(function(saveError) {
      if (saveError) { 
        return res.status(400).send(saveError.message);
      }

      let currentUser = { email: user.email, 
                          username: user.username,
                          phoneNumber: user.phoneNumber,
                          user_id: user._id,
                          profilePicture: user.profilePicture,
                          properties: user.properties };

      res.json({currentUser: currentUser, 
                token: userToken(user)});
    });
  });
};