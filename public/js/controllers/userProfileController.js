angular.module('quizRT')
 .controller('userProfileController',function($http,$scope,$rootScope,$location,$cookies){

   if(!$cookies.get('isAuthenticated')){
      $location.path('/login');
    }
     $rootScope.stylesheetName="userProfile";
     $scope.a=7;
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
         $scope.a=7;
       }
     }

    $http({method : 'GET',url:'/userProfile/profileData'})
      .success(function(data){
        $scope.data = data;
        $scope.topicsFollowed = [];
        var k = 0;
        if($scope.data.topicsPlayed!=null)
        {
        for(var i = 0;i < $scope.data.topicsPlayed.length;i++){
          if($scope.data.topicsPlayed[i].isFollowed){
            $scope.topicsFollowed[k] =$scope.data.topicsPlayed[i];
            k++;
          }
        }
      }
      $rootScope.myImage=$scope.data.imageLink;
      $rootScope.fakeMyName=$scope.data.name;
      $rootScope.topperImage=$scope.data.imageLink;
        //console.log($scope.topicsFollowed);
        $scope.showFollowedTopic=function(topicID){
          var path = '/topic/'+topicID;
          $location.path(path);
        };
        $scope.play=function()
        {
          var path="/categories";
          $location.path(path);
        }
      });
});
