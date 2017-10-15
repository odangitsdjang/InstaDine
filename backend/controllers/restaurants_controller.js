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

exports.allRestaurants = function(req,res,next) {
  Restaurant.find({}, function (error, restaurants) {
    if (error) { return next(error); }
    if (undefined || null) {
      return res.status(401).json({ error: 'Some other error' });
    }
    if (restaurants.length === 0) {
      return res.json({ restaurants: "No restaurants found" });
    }
    // filter data
    const filtered = {};
    restaurants.forEach(restaurant=> {
          filtered[restaurant._id] =  { 
            id: restaurant._id,
            full_address: restaurant.full_address,
            name: restaurant.name,
            phone_number: restaurant.phone_number,
            tables: restaurant.tables,
            queue: restaurant.queue,
            latlng: restaurant.geo,
            address: restaurant.address,
            wait: restaurant.wait_time
          };
    });
    console.assert(filtered);
    res.json({ restaurants: filtered });

  });
};

exports.search = function (req, res, next) {
  const searchQuery = req.query.searchQuery;
  let regex = "^" + searchQuery; 
  var re = new RegExp(regex, "gi");
  
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
