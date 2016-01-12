angular.module('quizRT', ['ngRoute'])
        .config(function($routeProvider){
          $routeProvider.when('/quizPlayer',{
            'templateUrl': 'html/quizPlayer.html',
            'controller': 'quizPlayerController'
          })

          .when('/userProfile',{
            'templateUrl': 'html/userProfile.html',
            'controller': 'userProfileController'
          })

          .when('/categories',{
            'templateUrl': 'html/categories.html',
            'controller': 'categoriesController'
          })

          .when('/category',{
            'templateUrl': 'html/category.html',
            'controller': 'categoryController'
          })

          .when('/topic',{
            'templateUrl': 'html/topic.html',
            'controller': 'topicController'
          });
});
