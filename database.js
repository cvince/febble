/*jshint es5:true, laxcomma:true */

var Q = require('q');
var mongoose = require('mongoose');
var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var settings = require('./settings');

var UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: false },
  externalId: { type: String, required: true },
  avatarUrl: { type: String, required: true }
});

// Schema for connected watch obect
var WatchSchema = new Schema({
  name: { type: String, required: true },
  serialPort: { type: String, required: true },
});

// Schema for new events
var EventScehma = new Schema({
  name: { type: String, required: true },
  service: { type: String, required: true }, // initially 'facebook', can be 'email' or 'other'
  status: { type: String, required: true }, // status of event (new, sent, noUserResponse, responseRecieved)
});

var User = exports.User = mongoose.model('User', UserSchema);

exports.connect = function() {
  return Q.ncall(mongoose.connect, mongoose, settings.DATABASE_URL);
};