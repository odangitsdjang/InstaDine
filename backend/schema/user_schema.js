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
    validate: [validateEmail, 'Pleae enter a valid email'],
    unique: 'Email is taken'
  },
  password: {
    type: String,
    required: 'Password is required',
    minlength: [6, 'Password has to be at least 6 chracters long']
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
    default: 'https://res.cloudinary.com/jerryzlau/image/upload/v1507858335/account_friend_human_man_member_person_profile_user_users-256_ovxp2a.png',
    required: true
  },
  properties: [],
  reservation: []
},
  { timestamps: true }
);

// Pre save encrypt password with BCrypt
userSchema.pre('save', function (next) {
  let user = this;
  if (user.isNew || user.isModified('password')) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) { return next(err); }
      bcrypt.hash(user.password, salt, null, function (error, hash) {
        if (error) { return next(error); }
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});



module.exports = userSchema;