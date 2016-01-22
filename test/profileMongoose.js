var mongoose = require('mongoose');
var fs = require('fs');
var profileData = JSON.parse(fs.readFileSync('ayush.json'));
mongoose.connect('mongodb://172.23.238.253/quizRT');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {

var ayush=
  console.log('connection open');
var Profile = require("../models/profile.js");

  var profile1 = new Profile(profileData);

  profile1.save(function(err){
    if ( err ) console.log(err);
    console.log(profileData.name +" profile Saved Successfully");
    console.log('closing mongo');
    mongoose.disconnect();
  });

});
