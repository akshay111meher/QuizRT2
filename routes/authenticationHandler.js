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
		console.log(req.user);
		//  console.log(req.user.username + "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
		// console.log(req.session);
		//  console.log(req.user.username + "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
		// console.log(req.user.username + "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
		res.send({state: 'success', isAuthenticated: req.session.isAuthenticated ,user: req.user ? req.user : null});
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
		req.session.isAuthenticated=false;
		console.log('logout function called');
		req.session.destroy();
		// delete req.session.user;
	});

	return router;

}
