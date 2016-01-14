angular.module('quizRT')
  .controller('topicController', function($scope,$rootScope){

    $scope.topicID=$routeParams.topicID;
    $scope.topic="";
    $rootScope.stylesheetName="topic";

    var path = '/topicsHandler/topic/'+$scope.topicID;
    $http.get(path)
          .success(function(data, status, headers, config) {
            $scope.topic = data;
          })
          .error(function(data, status, headers, config) {
            console.log(error);
          });


  });
