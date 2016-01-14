angular.module('quizRT')

 .controller('userProfileController',['$http','$scope','$rootScope',function($http,$scope,$rootScope)
 {
   $rootScope.stylesheetName="userProfile";

   $scope.a=11;
   $scope.see = true;

   $scope.btnImg = "images/userProfileImages/seeall.jpg";
   $scope.seeHide=function(length){
     if($scope.see){
       $scope.see = false;
       $scope.btnImg = "images/userProfileImages/hide.jpg";
       $scope.a=length;
     }
     else{
       $scope.see = true;
       $scope.btnImg = "images/userProfileImages/seeall.jpg";
       $scope.a=11;
     }

   }

      console.log("In Profile controller Testing");
      $http({method : 'GET',url:'/userProfile/profileData'})
       .success(function(data){
         console.log(data);
         $scope.data = data;
         $scope.topicsFollowed=[];
                  var i=0;
                  for(i=0;i<data.topicsPlayed.length;i++)
                  {
                    if(data.topicsPlayed[i].isFollowed)
                       {
                         $scope.topicsFollowed.push(data.topicsPlayed[i]);

                       }
                  }



       console.log($scope.topicsFollowed);
     });

 }]);
