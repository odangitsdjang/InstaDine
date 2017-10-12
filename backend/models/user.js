const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
<<<<<<< HEAD
=======
const userSchema = require('../schema/user_schema');
>>>>>>> b3b9c27543390725c4cba37d092e1c8ecfb4da5d

//this is same as is_password? with bcrpyt in rails
userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return callback(err); }
    callback(null, isMatch);
  });
};

module.exports = mongoose.model('user', userSchema);