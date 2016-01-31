angular.module('badminton.controllers.register', [])

.controller('RegisterCtrl', function($scope, $rootScope, $state, $ionicPopup, $ionicHistory, Register){
  $scope.submitRegister = function(data){
    Register(data).then(function(response){
      if(response.success && response.success == 1){
        $ionicPopup.alert({
          title: "注册成功!"
        }).then(function(){
          $state.go("home");
          $rootScope.isLogin = true;
        });
      }else{
        alert(response.msg);
        return false;
      }
    }, function(){});
  }
})