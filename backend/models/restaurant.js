const mongoose = require('mongoose');
const restaurantSchema = require('../schema/restaurant_schema');

module.exports = mongoose.model('restaurant', restaurantSchema);