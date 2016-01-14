var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Quiz = require("../models/quiz");
var quiz;

router.route('/quizData')
    .post(function(req, res) {
      Quiz.findOne()
          .populate('questions')
          .exec(function(err,data){
            res.send(data);
          })
});

module.exports= router;
