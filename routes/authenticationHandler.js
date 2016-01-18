var express = require('express');
var router = express.Router();

module.exports = function(passport){

	//sends successful login state back to angular
	router.get('/success', function(req, res){
		req.session.user = req.user.username;
		req.session.isLoggedIn = true;
		console.log("this is session object");
		 console.log(req.user.username + "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
			console.log(req.session);
		 console.log(req.user.username + "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
		// console.log(req.user.username + "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
		res.send({state: 'success',isLoggedIn: req.session.isLoggedIn, user: req.user ? req.user : null});
	});

	//sends failure login state back to angular
	router.get('/failure', function(req, res){
		res.send({state: 'failure', user: null, message: "Invalid username or password"});
	});

	//log in
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/auth/success',
		failureRedirect: '/auth/failure'
	}));
		// router.post('/login',function(req,res){
		// 	console.log('login initialize');
		// });
	//sign up
	router.post('/register', passport.authenticate('register', {
		successRedirect: '/auth/success',
		failureRedirect: '/auth/failure'
	}));

	//log out
	router.get('/logout', function(req, res) {
		req.logout();
	});

	return router;

}
