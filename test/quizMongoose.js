fs = require('fs');
var slugify = require('slugify');
var Quiz = require('../models/quiz.js');


 fs.readFile('quiz2.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var json=JSON.parse(data);

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/quizRT');

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function (callback) {
  // console.log('connection open');
//console.log(json);

console.log(json.length);
 for(i=0;i<json.length;++i)
 {
 var quiz1 = new Quiz(json[i]);

    quiz1.save(function(err){
    if ( err ) console.log(err);
    console.log("Quiz Saved Successfully");
 });
 }
 console.log('closing mongo');
 //mongoose.disconnect();
 });//end once


});//end readfile
