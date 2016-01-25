var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var mongoose = require('mongoose');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var redis = require('redis');
var redisClient = redis.createClient();

var RedisStore = require("connect-redis")(session);

var server = http.createServer(app);

var bodyParser = require('body-parser');
var topicsHandler = require('./routes/topicsHandler');
var profileHandler = require('./routes/profileHandler');
var index = require('./routes/index');
var quizPlayerHandler = require('./routes/quizPlayerHandler');
var authenticationHandler = require('./routes/authenticationHandler')(passport);
var redis_store = new RedisStore({ host: '172.23.238.171', port: 6379, client: redisClient});
mongoose.connect('mongodb://172.23.238.171/quizrtdump');
var db = mongoose.connection;

var Quiz = require("./models/quiz");
var sessionMiddleware = session({
  store: redis_store,
  secret: 'keyboard cat'
});

require('./routes/socket.js')(server,sessionMiddleware);

app.use(logger('dev'));
app.use(sessionMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));
//register routers to route paths

app.use('/', index);
app.use('/userProfile', profileHandler);
app.use('/topicsHandler', topicsHandler);
app.use('/quizPlayer',quizPlayerHandler);
app.use('/auth',authenticationHandler);
var initPassport = require('./passport-init');
initPassport(passport);

server.listen(3000, function() {
  console.log('App started for Quiz Play Testing!!');
});
