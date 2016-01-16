angular.module('quizRT')

  .controller('categoriesController', function($scope,$http,$location,$rootScope){

    $scope.categories="";
    $rootScope.stylesheetName="categories";

    $scope.showCategory=function(categoryID){
      var path = '/category/'+categoryID;
      $location.path(path);
    };


    $scope.showTopic=function(topicID){
      var path = '/topic/'+topicID;
      $location.path(path);
    };

      $http.get('/topicsHandler/categories')
          .success(function(data, status, headers, config) {
            $scope.categories = data;
          })
          .error(function(data, status, headers, config) {
            console.log(error);
          });

    });
