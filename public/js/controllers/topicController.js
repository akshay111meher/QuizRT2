angular.module('quizRT')
  .controller('topicController', function(socket,$scope,$rootScope,$routeParams,$http){
     $scope.topicID=$routeParams.topicID;
     $scope.topic="";
     $rootScope.stylesheetName="topic";
     $rootScope.tId= $scope.topicID;

    //  console.log($rootScope.tId);
     var path = '/topicsHandler/topic/'+$scope.topicID;
     $rootScope.tId=$scope.topicID;
     console.log($rootScope.tId);
     socket.emit('disjoin',"leaving page topic play");
     $http.get(path)
          .success(function(data, status, headers, config) {
               console.log(data);
               $scope.topic = data;
           })
          .error(function(data, status, headers, config) {
             console.log(error);
           });

     $scope.followUnfollow=function(){
      // $scope.topic.isFollowed = !$scope.topic.isFollowed;
       $http.put(path)
            .success(function(data, status, headers, config) {
              console.log(data);
              $scope.topic = data;
            })
            .error(function(data, status, headers, config) {
              console.log(error);
            });
    };

  });
