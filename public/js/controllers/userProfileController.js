angular.module('quizRT')

 .controller('userProfileController',['$http',function($http){
      var controller = this;
      console.log("In Profile controller Testing");
      $http({method : 'POST',url:'/userProfile/profileData'})
       .success(function(data){
         console.log(data);
         controller.data = data;
       });
 }]);
