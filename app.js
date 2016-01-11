var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quizRT');
var db = mongoose.connection;
var Quiz = require("./models/quiz");

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public'));

app.get('/',function(req,res){
  Quiz.findOne({quizId:"akssan"})
      .populate('questions')
        .exec(function(err,data){
          console.log(data);
        });
  res.render('index');
});

server.listen(3000, function() {
  console.log('App started for EJS testing!!');
});
