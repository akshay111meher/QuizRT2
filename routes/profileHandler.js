var express = require('express');

var bodyParser = require('body-parser');
var router = express.Router();
console.log(router);

var Profile = require("../models/profile");
module.exports= router;

 router.get('/profileData', function(req, res, next) {
       Profile.findOne({userId: "AY1"})
         .populate("topicsPlayed.topicId")
             .exec(function(err,data){
               profileData = data;
                var data2=JSON.stringify(profileData, null, 4);
                console.log(data2);
                res.json(profileData);
                           });

 });

module.exports = router;
