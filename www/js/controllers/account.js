angular.module('badminton.controllers.account', [])

.controller('AccountCtrl', function($scope, $rootScope, $ionicPopup, $ionicModal, UserInfo){
  // $scope.isLogin = $rootScope.isLogin || false;
  $scope.isLogin = true;

  UserInfo().then(function(response){
    $scope.userInfo = response.obj;
  }, function(){});

  $scope.userInfo = window.badminton.utils.objectAssign($scope.userInfo, $rootScope.userInfo?$rootscope.userInfo:{});

  $scope.modelData = window.badminton.config.accountModelData;
  $scope.signout = function(){
    $ionicPopup.confirm({
      title: '是否退出登录？'
    }).then(function(res) {
      if(res) {
        $scope.isLogin = false;
      }
    });
  }
})