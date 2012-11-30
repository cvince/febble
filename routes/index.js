
var db = require('../database');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

/*
 * GET home page.
 */

app.get('/',
  ensureLoggedIn('/login'),
  function(req, res) {

    console.log('req.user: ' + (typeof req.user) + ' : ' + req.user);

    db.User.findOne({_id: req.user}, function(err, user) {
      if(err) {
        console.log('Error finding user: ' + err);
        return res.send(500, 'Error fetching user data for: ' + req.user);
      }
      if(!user) {
        return res.send(404, 'User not found: ' + req.user);
      }
      else {
        console.log('User found: ' + user._id);
        res.render('index', { title: 'Febble', user: user });
      }
    });
});