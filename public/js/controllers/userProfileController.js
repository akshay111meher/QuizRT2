angular.module('quizRT')
 .controller('userProfileController',['$http','$scope','$rootScope','$location',function($http,$scope,$rootScope,$location){
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
        for(var i = 0;i < $scope.data.topicsPlayed.length;i++){
          if($scope.data.topicsPlayed[i].isFollowed){
            $scope.topicsFollowed[k] =$scope.data.topicsPlayed[i];
            k++;
          }
        }
        $scope.showFollowedTopic=function(topicID){
          var path = '/topic/'+topicID;
          $location.path(path);
        };
      });
 }]);
