angular.module('quizRT')
	.controller('quizPlayerController', function($scope, $interval){
  		$scope.time=10;

  		var timeInterval= $interval(function(){
  			$scope.time--;

  			if($scope.time==0){
  				$scope.time=10;
  			}
  		},1000)

 });
