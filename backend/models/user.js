const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const validateEmail = email => {
  return (/\S+@\S+\.\S+/).test(email);
};

const userSchema = new Schema({
  email: { 
    type: String,
    lowercase: 'Email has to be lowercase',
    required: 'Email address is required',
    unique: 'Email is taken',
    validate: [validateEmail, 'Pleae enter a valid email']
     },
  password: { 
    type: String, 
    required: 'Password is required',
    min: [6, 'Password has to be at least 6 chracters long']
  },
  username: { 
    type: String, 
    required: 'Username is required', 
    unique: 'Username is taken'
  },
  phoneNumber: { 
    type: String, 
    required: 'Phone Number is required', 
    unique: 'Phone Number is taken' 
  },
  profilePicture: {
    type: String,
    default: 'http://res.cloudinary.com/jerryzlau/image/upload/v1507741685/avatar-1295396_640_y2vrvm.png',
    required: true
  },
  properties: [] //takes restaurant ids 
},
{ timestamps: true }
);


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