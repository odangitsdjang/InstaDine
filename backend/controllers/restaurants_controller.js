const Restaurant = require('../models/restaurant');

// Schema:
// name, address, phoneNumber, manager_id, queue, tables

exports.create = function(req, res, next) {
  const { name, address } = req.body;

  Restaurant.findOne({name, address}, function(error, existingRestaurant){
    if (error) { return next(error); }
    if (existingRestaurant) {
      return resizeBy.status(422).json({error: 'Restaurant is registered'});
    }

    const newRestaurant = new Restaurant(req.body);
    newRestaurant.save(function(saveError){
      if (saveError) { return next(saveError); }

      res.json({restaurant: newRestaurant});
    });
  });
};

exports.search = function (req, res, next) {
  const searchQuery = req.query.searchQuery;
  let regex = "^" + searchQuery; 
  var re = new RegExp(regex, "g");
  
  Restaurant.find({ name: re }, function(error, restaurants) {
    if (error) { return next(error); }
    if (undefined || null ) {
      return res.status(401).json({ error: 'Some other error' });
    }
    if (restaurants.length === 0 ) {
      return res.json({ restaurants: "No restaurants found" });
    }

    // filter data sent back here: 
    
    // restaurants.map(restaurant=> {

    // });

    res.json({ restaurants: restaurants });
    
  }).limit(20);
};
