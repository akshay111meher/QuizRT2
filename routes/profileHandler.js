var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var Profile = require("../models/profile");
router.get('/profileData', function(req, res, next) {
       Profile.findOne({userId: "AY1"})
         .populate("topicsPlayed.topicId")
             .exec(function(err,data){
               profileData = data;
                var data2=JSON.stringify(profileData, null, 4);
                res.json(profileData);
 });
 });
module.exports = router;
