angular.module('quizRT')
  .controller('authController',function($scope,$http,$rootScope,$location,$cookies){
    $rootScope.stylesheetName="style";
    $scope.user = {username: '', password: ''};
    $scope.error_message = '';
    $scope.login = function(){
      $http.post('/auth/login', $scope.user).success(function(data){
        if(data.state == 'success'){
          $rootScope.authenticated = true;
          $rootScope.current_user = data.user.username;
          $location.path('userProfile/');
          $cookies.put('isAuthenticated',true);
        }
        else{
          $scope.error_message = data.message;
          $rootScope.authenticated = false;
          $cookies.remove('isAuthenticated');
        }
      });
    };

    $scope.register = function(){
    $http.post('/auth/register', $scope.user).success(function(data){
      if(data.state == 'success'){
        $rootScope.current_user = data.user.username;
        $location.path('/userProfile');
      }
      else{
        $scope.error_message = data.message;
      }
    });

  };

  // $scope.logout= function(){
  //   console.log('+++++++++++++++++logout called');
  //   $cookies.put('isAuthenticated',false);
  //   // $location.path('/login');
  // }

  });
