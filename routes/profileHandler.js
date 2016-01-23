var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var Profile = require("../models/profile");
router.get('/profileData', function(req, res, next) {

   console.log(req.session.user);
   if(req.session.user == null){
     var usr = "qqqq";
   }
   else{
      var usr = req.session.user.local.username;
   }

  // console.log(usr + " ##########################################");
  // console.log("this is from profile controller\n"+req.session.isLoggedIn);
       Profile.findOne({userId: usr})
         .populate("topicsPlayed.topicId")
             .exec(function(err,data){
               profileData = data;
                res.json(profileData);
 });
 });
module.exports = router;
