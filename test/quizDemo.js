var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quizRT');
var db = mongoose.connection;

  // console.log("this is form profile data"+req.params.id);
 
var quizModel =require('../models/quiz.js');

quizModel.findOne({quizId: "quiz1"})
          .exec(function(err,data){
            profileData = data;
            console.log(JSON.stringify(profileData, null, 4));

          });