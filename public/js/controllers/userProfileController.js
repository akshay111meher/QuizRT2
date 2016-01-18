angular.module('quizRT')
    
  $rootScope.authenticated=true;
  console.log("sbjndjs"+ $rootScope.authenticated);
 .controller('userProfileController',function($http,$scope,$rootScope,$location)
 {
    
   $http.get('/auth/checkAuth')
           .success(function(data, status, headers, config) {
                          console.log("############"+ data);
                          $rootScope.authenticated = data;
                        })
           .error(function(data, status, headers, config) {
                          console.log(error);
                        });
           console.log($rootScope.authenticated);
   if($rootScope.authenticated==false) $location.path('/login');


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


 });
