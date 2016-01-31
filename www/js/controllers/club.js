angular.module('badminton.controllers.club', [])

.controller('ClubCtrl', function($scope, $ionicModal, $ionicPopup, Clubs, ClubAdd){
  //for ng-include
  $scope.clubItemTemp = window.badminton.config.tempComponents.clubItemTempSmall;
  // 数据初始化
  Clubs().then(function(response){
    $scope.clubs = response.obj;
  });
  $scope.modelSelect = {
    number: window.badminton.utils.generateArray(999)
  }
  $scope.status = window.badminton.config.status.create;
  $scope.modelStatus = "";
  $scope.create = function(){
    if($scope.modelStatus === "hide"){
      $scope.clubModel.show();
    }else{
      $ionicModal.fromTemplateUrl('clubModel', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.clubModel = modal;
        $scope.clubModel.show();
      });
    }
  }
  $scope.close = function(){
    $scope.modelStatus = "hide";
    $scope.clubModel.hide();
  }
  $scope.submit = function(clubData){
    ClubAdd(clubData).then(function(response){
      console.log('Data of Club Add are: ', response.obj);
      if(response.success && response.success == 1){
        $ionicPopup.confirm({
          title: '是否提交新增俱乐部？'
        }).then(function(res){
          if(res){
            $ionicPopup.alert({
              title: "添加成功!"
            }).then(function(){
              $scope.modelStatus = "";
              $scope.clubModel.remove();
            });    
          }
        })
      }else{
        alert(response.msg);
        return false;
      }
    });
  }
})