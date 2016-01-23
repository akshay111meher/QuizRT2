var topScore = 0;
var questionCounter = 0;
var temp;
angular.module('quizRT')
	.controller('quizPlayerController', function(socket,$route,$scope,$location, $interval,$http,$rootScope,$window){
		$rootScope.stylesheetName="quizPlayer";
		console.log($rootScope.tId);
		$scope.myscore = 0;
		socket.emit('join',$rootScope.tId);

		socket.on('startGame',function(gid){
			console.log(gid);
			$http.post('/quizPlayer/quizData')
					.success(function(data, status, headers, config) {
									$scope.time=1;
									console.log(data);
						  		var timeInterval= $interval(function(){
						  			$scope.time--;
										if($scope.time == 0){
											$scope.topperScore = topScore;
											$scope.isDisabled = false;
											$scope.myImage = "/images/userProfileImages/akshay.jpg"
											$scope.topperImage = "/images/userProfileImages/akshayk.jpg"
											if(questionCounter == data.questions.length){
												$interval.cancel(timeInterval);
												//socket.emit('leaveGame',"leaving the game");
												$location.path('/login');
												// $location.path('/login');
												// $window.location.href='/#login';
												location.replace('/');
											}
											else{
												temp = loadNextQuestion(data,questionCounter);
												$scope.changeColor = function(id,element){
														if(id == "option"+(temp.correctIndex)){
							                $(element.target).addClass('btn-success');
															$scope.myscore = $scope.myscore + $scope.time + 10;
							              }
							              else{
							                $(element.target).addClass('btn-danger');
							                angular.element('#option'+temp.correctIndex).addClass('btn-success');
															$scope.myscore = $scope.myscore - 5;
							              }
							              $scope.isDisabled = true;
														socket.emit('updateStatus',{score:$scope.myscore,gameID:gid,name:'tom',image:$rootScope.myImage});
							            };

												$scope.question = temp.question;
												$scope.options = temp.options;

												if(temp.image != "null")
												$scope.questionImage = temp.image;

												else{
													$scope.questionImage = null;
												}
												$scope.time = 10;
											}
										}

						  		},1000);

					})
					.error(function(data, status, headers, config) {
						console.log(error);
					});
		});
		socket.on('takeScore', function(data){
			console.log("takeScore log emitted");
			console.log("rank= "+data.myRank);
			$scope.myrank= data.myRank;
			$scope.topperScore = data.topperScore;
		});
 });

function loadNextQuestion(data,questionNumber){
	var optionCoutner = 0;
	var obj;
	var options=[];
	while(data.questions[questionNumber].options[optionCoutner]){
		opt = {
				name:data.questions[questionNumber].options[optionCoutner],
				id:"option"+(optionCoutner+1)
		};
		options.push(opt);
		optionCoutner++;
	}
	obj = {
		"options":options,
		"question":data.questions[questionNumber].question,
		"image":data.questions[questionNumber].image,
		"correctIndex":data.questions[questionNumber].correctIndex
	};
	questionCounter++;
	return obj;
}
