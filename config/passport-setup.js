const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2').Strategy;
const http = require('http');
let accToken = '';

passport.use(
	new OAuth2Strategy({
		  authorizationURL: 'https://staging-auth.wallstreetdocs.com/oauth/authorize',
		  tokenURL: 'https://staging-auth.wallstreetdocs.com/oauth/token',
		  clientID: 'coding_test',
		  clientSecret: 'bwZm5XC6HTlr3fcdzRnD',
		  callbackURL: "http://localhost:3000"
		}
	, (accessToken, refreshToken, profile, cb) => {
		accToken = accessToken;
	}));

module.exports = accToken;	

	

