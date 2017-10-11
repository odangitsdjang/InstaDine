const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    lowercase: 'Email has to be lowercase',
    required: 'Email address is required',
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
    default: 'http://res.cloudinary.com/jerryzlau/image/upload/v1507574589/abstract-user-flat-2_fs7opy.svg',
    required: true
  },
  properties: [] //takes restaurant ids 
},
  { timestamps: true }
);

module.exports = userSchema;