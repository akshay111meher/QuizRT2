angular.module('quizRT')

  .controller('categoriesController', function($scope,$http,$location){

    $scope.categories="";

    $scope.showCategory=function(categoryID){
      var path = '/category/'+categoryID;
      $location.path(path);
    }

      $http.get('/topicsHandler/categories')
          .success(function(data, status, headers, config) {
            $scope.categories = data;
          })
          .error(function(data, status, headers, config) {
            console.log(error);
          });

    });
