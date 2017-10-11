const passport = require('passport');
const AuthenticationController = require('../controllers/auth_controller');
const passportService = require('./passport');

let requireAuth = passport.authenticate('jwt', {session: false});
let requireLogin = passport.authenticate('local', {session: false});
let router = require('express').Router();

//Routes to signup
router.route('/signup')
      .post(AuthenticationController.signup);

//Routes to sign in
router.route('/login')
      .post([requireLogin, AuthenticationController.login]);
      // .post(AuthenticationController.login);

module.exports = router;

