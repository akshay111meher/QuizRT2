fs = require('fs');
var Topics = require('../models/topic.js');


fs.readFile('topicPlay.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var json=JSON.parse(data);

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/quizRT');

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function (callback) {
   console.log('connection open');
console.log(json);
 var topic1 = new Topics(json);
    topic1.save(function(err){
    if ( err ) console.log(err);
    console.log("Topics Saved Successfully");
 });
 console.log('closing mongo');
 //mongoose.disconnect();
 });//end once


});//end readfile
