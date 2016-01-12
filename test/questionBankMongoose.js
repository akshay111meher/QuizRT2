fs = require('fs');
var slugify = require('slugify');
var Question = require('../models/question.js');


 fs.readFile('questionBank.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var json=JSON.parse(data);

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://172.23.238.253/quizRT');

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function (callback) {
  // console.log('connection open');
//console.log(json);

console.log(json.length);
 for(i=0;i<json.length;++i)
 {
 var question1 = new Question(json[i]);

    question1.save(function(err){
    if ( err ) console.log(err);
    console.log("Question Saved Successfully");
 });
 }
 console.log('closing mongo');
 //mongoose.disconnect();
 });//end once


});//end readfile
