const router = require('express').Router();
const passport = require('passport');

router.get('/', passport.authenticate('oauth2'),
  function(req, res) {
  	res.redirect('/');
  	res.render('index', {title: "Logged In"});
});


router.get('/login', function(req, res) {
	res.render('login');
});

router.get('/auth', passport.authenticate('oauth2'), function(req, res) {
	res.send('logging in...');
});

module.exports = router;
