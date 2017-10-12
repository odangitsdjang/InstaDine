const passport = require('passport');
const passportService = require('./passport');
const AuthenticationController = require('../controllers/auth_controller');
const RestaurantsController = require('../controllers/restaurants_controller');
const ReservationsController = require('../controllers/reservations_controller');

let requireAuth = passport.authenticate('jwt', {session: false});
let requireLogin = passport.authenticate('local', {session: false});
let router = require('express').Router();

// Routes to signup
router.route('/signup')
      .post(AuthenticationController.signup);

// Routes to sign in
router.route('/login')
      .post([requireLogin, AuthenticationController.login]);

// Route to create new reservation
router.route('/reservations')
      .post(ReservationsController.create);
      
module.exports = router;

