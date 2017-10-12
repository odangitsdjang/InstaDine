const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const userSchema = require('../schema/user_schema');

//this is same as is_password? with bcrpyt in rails
userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return callback(err); }
    callback(null, isMatch);
  });
};

module.exports = mongoose.model('user', userSchema);
