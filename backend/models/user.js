const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
import userSchema from '../schema/user_schema';

const validateEmail = email => {
  return (/\S+@\S+\.\S+/).test(email);
};

userSchema.pre('save', function(next) {
  let user = this;
  if (user.isNew || user.isModified('password')) {
    bcrypt.genSalt(10, function(err, salt) {
      if(err) { return next(err); }
      bcrypt.hash(user.password, salt, null, function(error, hash){
        if (error) { return next(error); }
        user.password = hash;
        next();
      });
    });
  }else{
    next();
  }
});

//this is same as is_password? with bcrpyt in rails
userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return callback(err); }
    callback(null, isMatch);
  });
};

module.exports = mongoose.model('user', userSchema);