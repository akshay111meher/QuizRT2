angular.module('quizRT')
  .controller('topicController', function($scope,$rootScope,$routeParams,$http){

     $scope.topicID=$routeParams.topicID;
     $scope.topic="";
     $rootScope.stylesheetName="topic";
     //console.log("Hreloooisdjiskxnmksxmksmxlsxmmmmmmmmmmmmmm");
     var path = '/topicsHandler/topic/'+$scope.topicID;

     $http.get(path)
           .success(function(data, status, headers, config) {
             console.log(data);
            $scope.topic = data;
           })
          .error(function(data, status, headers, config) {
             console.log(error);
           });


     $scope.followUnfollow=function(){

       console.log("inside followUnfollow");

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
