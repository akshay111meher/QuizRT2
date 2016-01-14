angular.module('quizRT')

    .controller('categoryController', function($scope,$routeParams,$http,$rootScope){
          $scope.categoryID=$routeParams.categoryID;
          $scope.category="";
          $rootScope.stylesheetName="category";

          var path = '/topicsHandler/category/'+$scope.categoryID;
          $http.get(path)
                .success(function(data, status, headers, config) {
                  $scope.category = data;
                })
                .error(function(data, status, headers, config) {
                  console.log(error);
                });
});
