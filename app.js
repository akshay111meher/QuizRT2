var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var server = http.createServer(app);
var bodyParser = require('body-parser');
var topicsHandler = require('./routes/topicsHandler');
var profileHandler = require('./routes/profileHandler');
var index = require('./routes/index');
var quizPlayerHandler = require('./routes/quizPlayerHandler');

var mongoose = require('mongoose');
mongoose.connect('mongodb://172.23.238.253/quizRT');
var db = mongoose.connection;
var Quiz = require("./models/quiz");

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public'));

//register routers to route paths

app.use('/', index);
app.use('/userProfile', profileHandler);
app.use('/topicsHandler', topicsHandler);
app.use('/quizPlayerHandler',quizPlayerHandler);

server.listen(3000, function() {
  console.log('App started for Quiz Play Testing!!');
});
