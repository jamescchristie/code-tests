const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const routes = require('./routes/index');
const passportSetup = require('./config/passport-setup');

const app = express()

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use('/', routes);

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Your app is running at http://%s:%s', host, port);
})