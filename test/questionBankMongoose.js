var mongoose = require('mongoose');
var fs = require('fs');
var questionData = JSON.parse(fs.readFileSync('questionBank.json'));
mongoose.connect('mongodb://localhost/quizRT');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {

var questionBank = require("../models/question.js");


questionData.forEach(function(data){
  	var question= new questionBank(data);
  	question.save(function(err){
    if ( err ) console.log(err);
    console.log(" quiestion bank Saved Successfully");
});
});
// for(var i=0; i<questionData.length ; i++){
// 	var question= new questionBank(questionData[i]);
// 	console.log(questionData[i]);
//    	question.save(function(err){
//      if ( err ) console.log(err);
//      console.log(" quiestion bank Saved Successfully");
// });
// }

  console.log('closing mongo');
  mongoose.disconnect();
});
