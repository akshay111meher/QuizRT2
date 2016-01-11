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
          .when('/topicsMain',{
            'templateUrl': 'html/topicsMain.html'
          });
        });
