//Copyright {2016} {NIIT Limited, Wipro Limited}
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//   
//   Name of Developers  Raghav Goel, Kshitij Jain, Lakshay Bansal, Ayush Jain, Saurabh Gupta, Akshay Meher
//  
 
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
