angular.module('quizRT')
    .controller('categoryController', function($scope,$routeParams,$http,$rootScope,$location){
      $scope.categoryID=$routeParams.categoryID;
      $scope.category="";
      $rootScope.stylesheetName="category";
      $scope.showTopic=function(topicID){
        var path = '/topic/'+topicID;
        $location.path(path);
      };
      var path = '/topicsHandler/category/'+$scope.categoryID;
      $http.get(path)
        .success(function(data, status, headers, config) {
          $scope.category = data;
        })
        .error(function(data, status, headers, config) {
          console.log(error);
        });
   });
