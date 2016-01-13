angular.module('quizRT')

  .controller('categoriesController', function($scope,$http){

    $scope.categories="";

      $http.get('/topicsHandler/categories')
          .success(function(data, status, headers, config) {
            $scope.categories = data;
          })
          .error(function(data, status, headers, config) {
            console.log(error);
          });

    });
