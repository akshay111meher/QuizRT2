var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("******************************************");
	//console.log(req.session.user);
	console.log("********************************************");
	res.render('index', { title: "QuizRT"});
});

module.exports = router;
