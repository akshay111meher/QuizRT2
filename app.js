var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);

var mongoose = require('mongoose');
mongoose.connect('mongodb://172.23.238.253/quizRT');
var db = mongoose.connection;
var Quiz = require("./models/quiz");

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public'));

app.get('/',function(req,res){

  res.render('index');
});

 app.post('/userProfile/profileData',function(req, res, next) {
   var Profile = require("./models/profile");
   var mongoose = require('mongoose');
   //mongoose.connect('mongodb://172.23.238.253/quizRT');
   var db = mongoose.connection;
       Profile.findOne({userId: "AY1"})
         .populate("topicsPlayed.topicId")
             .exec(function(err,data){
               profileData = data;
                var data2=JSON.stringify(profileData, null, 4);
                console.log(data2);
                res.json(profileData);
             });

 });

server.listen(3000, function() {
  console.log('App started for EJS testing!!');
});
