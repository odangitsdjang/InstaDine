const passport = require('passport');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy; //for safe REST API
const LocalStrategy = require('passport-local');

const User = require('../models/user');
const config = require('../config');

let localOptions = {
  usernameField: 'email'
};

let localStrategy = new LocalStrategy(localOptions, function(email, password, done) {
  //check username and password 
  console.log(email, password, "---------------------");
  User.findOne({email: email.toLowerCase()}, function(err, user) {
    if (err) { return done(err); }
    if (!user) { return done(null, false); }
    user.comparePassword(password, function(error, isMatch) {
      if (error) { return done(error); }
      if (!isMatch) { return done(null, false); }
      return done(null, user);
    });
  });
});

let jwtOptions = {
  secretOrKey: config.secret,
  jwtFromRequest: ExtractJwt.fromHeader('authorization')
};

let jwtStrategy = new JwtStrategy(jwtOptions, function(payload, done) {
  User.findById(payload.sub, function(err, user) {
    if (err) { return done(err, false); }
    if (user){
      done(null, user);
    }else{
      done(null, false);
    }
  });
});

passport.use(localStrategy);
passport.use(jwtStrategy);