angular.module('badminton.controllers.login', [])

.controller('LoginCtrl', function($scope, $rootScope, $state, $ionicPopup, $ionicHistory, Login){
  $scope.submitSignin = function(data){
    Login(data).then(function(response){
      if(response.success && response.success == 1){
        $ionicPopup.alert({
          title: "登陆成功!"
        }).then(function(){
          $ionicHistory.goBack();
          $rootScope.isLogin = true;
        });
      }else{
        alert(response.msg);
        return false;
      }
    }, function(){});
  }
});