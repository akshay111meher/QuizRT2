angular.module('quizRT')

 .controller('userProfileController',['$http','$scope','$rootScope','$location',function($http,$scope,$rootScope,$location)
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
         $scope.topicsFollowed = [];
         var k = 0;
         for(var i = 0;i < $scope.data.topicsPlayed.length;i++){
            if($scope.data.topicsPlayed[i].isFollowed){
              $scope.topicsFollowed[k] =$scope.data.topicsPlayed[i];
              k++;
            }
         }
         $scope.showFollowedTopic=function(topicID){
           console.log(topicID);
           var path = '/topic/'+topicID;
           console.log(path);
           $location.path(path);
         };
       }
     );


 }]);
