angular.module('quizRT', ['ngRoute'])
        .config(function($routeProvider){
          $routeProvider.when('/quizPlayer',{
            'templateUrl': 'html/quizPlayer.html'
          })

          .when('/userProfile',{
            'templateUrl': 'html/userProfile.html'
          })

          .when('/categories',{
            'templateUrl': 'html/categories.html'
          })

          .when('/category',{
            'templateUrl': 'html/category.html'
          })

          .when('/topic',{
            'templateUrl': 'html/topic.html'
          });
});
