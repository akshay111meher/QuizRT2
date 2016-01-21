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
router.get('/registerSuccess', function(req, res){
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
		req.session.user=null;
	});
    router.get('/registerFailure', function(req, res){
		res.send({state: 'failure', user: null, message: "Invalid username or password"});
		req.session.user=null;
	});
	//log in
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/auth/success',
		failureRedirect: '/auth/failure'
	}));

	//sign up
	router.post('/register', passport.authenticate('register', {
		successRedirect: '/auth/registerSuccess',
		failureRedirect: '/auth/registerFailure'
	}));

	//log out
	router.post('/logout', function(req, res) {
		req.session.user=null;
		console.log('logout of passsport called');
		req.logout();
		res.send(null);
	});

	router.post('/createProfile', function(req, res){
		console.log('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH');
		console.log(req.user);
		console.log('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH');
	});

	return router;

}
