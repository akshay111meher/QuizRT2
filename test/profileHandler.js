var express = require('express');
var fs = require('fs');
var router = express.Router();
var mongoose = require('mongoose');
var Profile;
var profileData;

var Profile = require("../models/profile");
// var Topic=require("../models/Topic");

var mongoose = require('mongoose');
mongoose.connect('mongodb://172.23.238.253/quizRT');

var db = mongoose.connection;
  // console.log("this is form profile data"+req.params.id);
    Profile.findOne({userId: "LA1"})
      .populate("topicsPlayed.topicId")
          .exec(function(err,data){
            profileData = data;
            console.log(JSON.stringify(profileData, null, 4));

          });
