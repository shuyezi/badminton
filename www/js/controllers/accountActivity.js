angular.module('badminton.controllers.accountActivity', [])

.controller('AccountActivityCtrl', function($scope, $ionicPopup, $ionicModal, $ionicTabsDelegate, AccountActivity, UserList){
  //for ng-includes
  $scope.activityItemTemp = window.badminton.config.tempComponents.activityItemSmall;

  $scope.items = [
    { txt: "即将开始", type: 1 },
    { txt: "已结束", type: 2 }
  ];
  var activitysObj = {};
  AccountActivity().then(function(response){
    $scope.accountActivitys = response.obj;
    activitysObj[0] = response.obj;
  }, function(){});
  $ionicTabsDelegate.select(0);
  //弹层模型
  $ionicModal.fromTemplateUrl('joinersListModel', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.joinersListModel = modal;
  });
  // 当隐藏的模型时执行动作
  $scope.$on('modal.hide', function() { /* 执行动作 */ });
  // 当隐藏的模型时执行动作
  $scope.$on('modal.show', function() { /* 执行动作 */ });

  //查看名单
  $scope.checkList = function(id){
    event.preventDefault();
    UserList({id: id}).then(function(response){
      $scope.userList = response.obj;
    }, function(){});
    $scope.joinersListModel.show();
  }
  $scope.close = function(){
    $scope.joinersListModel.hide();
  }
  //拒绝
  $scope.jujue = function(item){
    $ionicPopup.confirm({
      title: '是否决绝？'
    }).then(function(res) {
      if(res) {
        item.permission = 3;
      }
    });
  }
  //接受
  $scope.jieshou = function(item){
    $ionicPopup.confirm({
      title: '是否参与？'
    }).then(function(res) {
      if(res) {
        item.permission = 2;
      }
    });
  }
  //取消活动
  $scope.cancel = function(item){
    event.preventDefault();
    $ionicPopup.confirm({
      title: '是否取消活动？'
    }).then(function(res) {
      if(res) {
        item.isCanceled = true;
      }
    });
  }

  $scope.onTabSelected = function(item){
    if(item.type == 1){
      $scope.accountActivitys = activitysObj[0];
    }else if(item.type == 2){
      if(activitysObj[1]) {
        $scope.accountActivitys = activitysObj[1];
      }else{
        AccountActivity({ type: 2 }).then(function(response){
          $scope.accountActivitys = response.obj;
          activitysObj[1] = response.obj;
        }, function(){});
      }
    }
  }
})