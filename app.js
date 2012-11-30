/**
 * Module dependencies.
 */

var express = require('express')
  , engines = require('consolidate')
  , http = require('http')
  , path = require('path')
  , db = require('./database')
  , settings = require('./settings')
  , passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;

app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.engine('html', engines.ejs);
  app.set('view engine', 'html');
  app.use(express.favicon());
  //app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser(settings.SECRET_KEY));
  app.use(express.cookieSession());

  // passport
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

require('./routes');
require('./routes/login');

db.connect()
.then(function() {
  console.log('Connected to MongoDB at ' + settings.DATABASE_URL);
  http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
  });
})
.fail(function(err) {
  console.log('Failed to connect to database');
});