const Restaurant = require('../models/restaurant');

// Schema:
// name, address, phoneNumber, manager_id, queue, tables

exports.create = function(req, res, next) {
  const { name, address } = req.body;

  Restaurant.findOne({name, address}, function(error, existingRestaurant){
    if (error) { return next(error); }
    if (existingRestaurant) {
      return res.status(422).json({error: 'Restaurant is registered'});
    }

    const newRestaurant = new Restaurant(req.body);
    newRestaurant.save(function(saveError){
      if (saveError) { return next(saveError); }

      res.json({restaurant: newRestaurant});
    });
  });
};