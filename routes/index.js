var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
/* GET home page. */
router.get('/', function(req, res, next) {

	if(req.user) {
		req.headers.z="blahh";
		req.session.user = req.user;
		req.session.isLoggedIn = true;
		req.session.tid = "not assigned to game";
		//console.log("this is session object");
		 //console.log(req.user.username + "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
			//console.log(req.session);
		 //console.log(req.user.username + "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
		// console.log(req.user.username + "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
		res.render('index',{title:"QuizRT",profileData:{state: 'success',isLoggedIn: req.session.isLoggedIn, user: req.user ? req.user : null}});
	}
	else {
	console.log("******************************************");
	//console.log(req.session.user);
	console.log("********************************************");
	res.render('index', { title: "QuizRT",profileData:2});
}
});

module.exports = router;
