angular.module('quizRT')

    .controller('categoryController', function($scope,$routeParams,$http){
          console.log($routeParams.categoryID);
          $scope.categoryID=$routeParams.categoryID;
          $scope.category="";
          var path = '/topicsHandler/category/'+$scope.categoryID;
          $http.get(path)
                .success(function(data, status, headers, config) {
                  console.log(data);
                  $scope.category = data;
                })
                .error(function(data, status, headers, config) {
                  console.log(error);
                });
});
