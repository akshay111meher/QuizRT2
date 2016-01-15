var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var Profile = require("../models/profile");
router.get('/profileData', function(req, res, next) {
  var usr = req.session.user.toUpperCase();
  console.log(usr + " ##########################################");
       Profile.findOne({userId: usr})
         .populate("topicsPlayed.topicId")
             .exec(function(err,data){
               profileData = data;
                var data2=JSON.stringify(profileData, null, 4);
                res.json(profileData);
 });
 });
module.exports = router;
