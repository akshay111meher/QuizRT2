var express = require('express');
var router = express.Router();

module.exports = function(passport){


	router.route('/checkAuth')

  		.get(function(req, res){

		return res.send(req.session.isAuthenticated);
 	});



	
	//sends successful login state back to angular
	router.get('/success', function(req, res){
		req.session.user = req.user.username;
		req.session.isAuthenticated= true;
		console.log("this is session object");
<<<<<<< HEAD
		console.log(req.user);
		//  console.log(req.user.username + "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
		// console.log(req.session);
		//  console.log(req.user.username + "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
		// console.log(req.user.username + "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
		res.send({state: 'success', isAuthenticated: req.session.isAuthenticated ,user: req.user ? req.user : null});
=======

		res.send({state: 'success', user: req.user ? req.user : null});
>>>>>>> f11fd175f1c9136986c50904d8b9f95a953adcb9
	});

	//sends failure login state back to angular
	router.get('/failure', function(req, res){
		req.session.isAuthenticated=false;
		res.send({state: 'failure', user: null, message: "Invalid username or password", isAuthenticated: req.session.isAuthenticated});
	});

	//log in
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/auth/success',
		failureRedirect: '/auth/failure'
	}));

	//sign up
	router.post('/register', passport.authenticate('register', {
		successRedirect: '/auth/success',
		failureRedirect: '/auth/failure'
	}));

	//log out
	router.get('/logout', function(req, res) {
		req.session.isAuthenticated=false;
		console.log('logout function called');
		req.session.destroy();
		// delete req.session.user;
	});

	return router;

}
