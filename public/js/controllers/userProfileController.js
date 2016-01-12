angular.module('quizRT')
 .controller('userProfileController',['$http','$scope',function($http,$scope){
      console.log("In Profile controller Testing");
      $http({method : 'POST',url:'/userProfile/profileData'})
       .success(function(data){
         console.log(data);
         $scope.data = data;
       });
 }]);
