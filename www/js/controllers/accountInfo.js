angular.module('badminton.controllers.accountInfo', [])

.controller('AccountInfoCtrl', function($scope, $rootScope, $ionicModal, $ionicPopup, $ionicHistory, UserInfo, UserInfoEdit){
  
  UserInfo().then(function(response){
    $scope.userInfo = response.obj;
  }, function(){});

  //弹层模型
  $ionicModal.fromTemplateUrl('InfoEditModel', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.infoEditModel = modal;
  });

  $scope.submit = function(userInfo){
    console.log("userInfo", userInfo);
    UserInfoEdit(userInfo).then(function(response){
      if(response.success && response.success == 1){
        $ionicPopup.confirm({
          title: '是否提交修改？'
        }).then(function(res){
          if(res){
            $ionicPopup.alert({
              title: "修改成功!"
            }).then(function(){
              $rootScope.userInfo = userInfo;
              $ionicHistory.goBack();
            });    
          }
        })
      }else{
        alert(response.msg);
        return false;
      }
    }, function(){});
  }
})