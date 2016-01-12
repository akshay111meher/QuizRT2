var express = require('express');
var fs = require('fs');
var router = express.Router();
var mongoose = require('mongoose');
var Profile;
var profileData;
router.get('/profileData', function(req, res, next) {
  var Profile = require("../models/profile");
  var mongoose = require('mongoose');
  mongoose.connect('mongodb://172.23.238.253/quizRT');
  var db = mongoose.connection;
      Profile.findOne({userId: "AY1"})
        .populate("topicsPlayed.topicId")
            .exec(function(err,data){
              profileData = data;
               var data2=JSON.stringify(profileData, null, 4);
            });
            res.json(data2);
          });
});
