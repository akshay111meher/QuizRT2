angular.module('quizRT')
	.controller('resultController', function(socket,$route,$scope,$location, $interval,$http,$rootScope,$window){
		console.log("calledResult");

		socket.emit('getResult',$rootScope.freakgid);
    socket.on('takeResult',function(data) {
			data.sort(function(a,b) {
				return b.score - a.score;
			})
      $scope.topicName = $rootScope.tID;
			$scope.players = data;
			socket.emit('storeResult',$rootScope.freakgid);
			console.log($rootScope.userIdnew);
			socket.emit('updateProfile',{score:$rootScope.finalScore,rank:$rootScope.finalRank,topicid:$rootScope.tId,userID:$rootScope.userIdnew});//score and rank
    });
		setTimeout(function(){
			location.replace('/');
		},20000);
  });
