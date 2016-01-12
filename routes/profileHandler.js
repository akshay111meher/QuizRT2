var express = require('express');

var bodyParser = require('body-parser');
var router = express.Router();
console.log(router);
// router.post('/profileData',function(req, res, next) {
//   var Profile = require("./models/profile");
//   var mongoose = require('mongoose');
//   //mongoose.connect('mongodb://172.23.238.253/quizRT');
//   var db = mongoose.connection;
//       Profile.findOne({userId: "AY1"})
//         .populate("topicsPlayed.topicId")
//             .exec(function(err,data){
//               profileData = data;
//                var data2=JSON.stringify(profileData, null, 4);
//                console.log(data2);
//                res.json(profileData);
//             });
//
// });

module.exports = router;
