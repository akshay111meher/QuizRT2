angular.module('quizRT')

 .controller('userProfileController',['$http','$scope',function($http,$scope,$rootScope)
 {
   $rootScope.stylesheetName="userProfile";

   $scope.a=11;
   $scope.seeall=function(length){
     console.log(length);
     $scope.a=length;
   }
      console.log("In Profile controller Testing");
      $http({method : 'GET',url:'/userProfile/profileData'})
       .success(function(data){
         console.log(data);
         $scope.data = data;
       });
 }]);
