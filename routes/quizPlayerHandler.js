var express = require('express');
var Reservoir = require('reservoir');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Quiz = require("../models/quiz");
var Question=require("../models/question.js");

router.route('/quizData')
    .post(function(req, res) {

      // var topicInst = "Cartoons";
      //
      // Question.find({'topicId':topicInst})
      //
      // .exec(function(err,data){
      //   var myReservoir = Reservoir(5);
      //   data.forEach(function(e) {
      //         myReservoir.pushSome(e);
      //     });
      //   var quiz=new Quiz();
      //   quiz1.topicId=topicInst;
      //   var myReservoir = Reservoir(5);
      //   data.forEach(function(e) {
      //         myReservoir.pushSome(e);
      //     });
      //     quiz1.questions=[];
      //     for(var i=0;i<5;++i)
      //     {
      //       quiz1.questions.push(myReservoir[i]._id);
      // }
      //
      //   console.log("hdkjsksdskdskdnskdnskd");
      //   console.log(quiz1);
      //   console.log("dvkdmfkdmfkdmd");
      //   quiz1.save(function(err){
      //   if ( err ) console.log(err);
      //     });
      //
      //
      Quiz.findOne()
          .populate('questions')
          .exec(function(err,data){
            console.log(data);
            res.send(data);
          })

      // });

});

module.exports= router;
