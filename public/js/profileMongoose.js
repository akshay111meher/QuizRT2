var mongoose = require('mongoose');
var fs = require('fs');
var profileData = JSON.parse(fs.readFileSync('public/data/ayush.json'));
mongoose.connect('mongodb://localhost/quizRT');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {

  console.log('connection open');

var Profile = require("./models/profile.js");

  var profile1 = new Profile(profileData);

  profile1.save(function(err){
    if ( err ) console.log(err);
    console.log(profileData.name +" profile Saved Successfully");
    console.log('closing mongo');
    mongoose.disconnect();
  });

});
