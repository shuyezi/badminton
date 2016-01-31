angular.module('badminton.controllers.clubDetail', [])

.controller('ClubDetailCtrl', function($scope, $stateParams, $ionicModal, $ionicPopup, ClubDetail, ClubEdit){
  //for ng-include
  $scope.activityItemTemp = window.badminton.config.tempComponents.activityItemBig;

  var clubIndex = $stateParams.clubId;
  ClubDetail({id: clubIndex}).then(function(response){
    $scope.detail = response.obj;

    console.log('club-detail', $scope.detail);

    // $scope.club = {
    //   name: $scope.detail.name,
    //   time: $scope.detail.time,
    //   area: $scope.detail.area,
    //   number: window.badminton.utils.generateArray(999),
    //   intro: $scope.detail.intro
    // }
  }, function(){});
  // $scope.detail = ClubDetail[clubIndex];
  $scope.isLogin = true;
  
  //弹层模型
  $ionicModal.fromTemplateUrl('joinClubModel', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.joinClubModel = modal;
  });

  //弹层模型
  $ionicModal.fromTemplateUrl('clubModel', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.clubModel = modal;
  });
  
  //加入俱乐部理由弹层
  $scope.join = function(){
    $scope.joinClubModel.show();
  }
  //关闭理由弹层
  $scope.close = function(){
    $scope.joinClubModel.hide();
  }
  //退出俱乐部
  $scope.out = function(){
    $ionicPopup.confirm({
      title: '是否退出该俱乐部？'
    }).then(function(res) {
      if(res) {
        $scope.detail.isMember = false;
        $scope.detail.isApplied = false;
      }
    });
  }
  //提交申请
  $scope.submitApply = function(applyData){
    console.log('applyData', applyData);
    $ionicPopup.confirm({
      title: '是否确认申请？'
    }).then(function(res) {
      if(res) {
        $scope.close();
        $scope.isLogin = true;
        $scope.detail.isApplied = true;
        $scope.detail.permission = 1;
      }
    });
  }
  //编辑俱乐部
  $scope.modelSelect = {
    number: window.badminton.utils.generateArray(99),
    type: window.badminton.config.activityType
  };
  $scope.modelStatus = "";
  $scope.edit = function(){
    $scope.club = $scope.detail;
    console.log('$scope.club', $scope.club);
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
    $scope.clubModel.hide();
  }
  $scope.submit = function(clubData){
    ClubEdit(clubData).then(function(response){
      console.log('Data of Activity Add are: ', clubData, response.obj);
      if(response.success && response.success == 1){
        $ionicPopup.confirm({
          title: '是否提交俱乐部修改？'
        }).then(function(res){
          if(res){
            $ionicPopup.alert({
              title: "修改成功!"
            }).then(function(){
              $scope.modelStatus = "";
              $scope.detail = clubData;
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