angular.module('badminton.controllers', [])

.controller('HomeCtrl', function($scope, Home){
  $scope.home = Home;
})
.controller('LoginCtrl', function($scope, $rootScope, $state){
  $scope.modelData = window.config.loginModelData;
  $scope.submitSignin = function(){
    $rootScope.isLogin = true;
    $state.go('account');
  }
})
.controller('RegisterCtrl', function($scope, $ionicHistory){
  $scope.modelData = window.config.registerModelData;
  $scope.submitSignin = function(){
    // $ionicHistory.goBack();
  }
})
.controller('ActivityCtrl', function($scope, $ionicModal, $ionicPopup, Activity){
  //for ng-include
  $scope.activityItemTemp = window.config.tempComponents.activityItemBig;

  //数据初始化
  $scope.activitys = Activity;
  $scope.modelData = window.config.activityModelData;

  //弹层模型
  $ionicModal.fromTemplateUrl('activityCreateModel', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.activityCreateModel = modal;
  });
  // 当隐藏的模型时执行动作
  $scope.$on('modal.hide', function() { /* 执行动作 */ });
  // 当隐藏的模型时执行动作
  $scope.$on('modal.show', function() { /* 执行动作 */ });

  $scope.create = function(){
    $scope.activityCreateModel.show();
  }
  $scope.close = function(){
    $scope.activityCreateModel.hide(); 
  }
})
.controller('ActivityDetailCtrl', function($scope, $ionicModal, $ionicPopup, $stateParams, ActivityDetail){
  console.log('xx', $stateParams);
  $scope.winHeight = window.innerHeight;
  $scope.winWidth = window.innerWidth;
  var activityIndex = 'a' + $stateParams.activityId;
  $scope.activityDetail = ActivityDetail[activityIndex];
  $scope.isLogin = true;
  console.log('$scope.activityDetail', $scope.activityDetail);

  $scope.apply = function(){
    $ionicPopup.confirm({
      title: '是否确认报名？'
    }).then(function(res) {
      if(res) {
        $ionicPopup.alert({
          title: "报名成功!"
        }).then(function(){
          $scope.activityDetail.isApplied = true;
          $scope.activityDetail.permission = 1;
        });
      }
    });
  }
})
.controller('ClubCtrl', function($scope, $ionicModal, Clubs){
  //for ng-include
  $scope.clubItemTemp = window.config.tempComponents.clubItemTempSmall;

  $scope.clubs = Clubs;
  $scope.modelData = window.config.clubsModelData;

  //弹层模型
  $ionicModal.fromTemplateUrl('clubCreateModel', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.clubCreateModel = modal;
  });
  // 当隐藏的模型时执行动作
  $scope.$on('modal.hide', function() { /* 执行动作 */ });
  // 当隐藏的模型时执行动作
  $scope.$on('modal.show', function() { /* 执行动作 */ });

  $scope.create = function(){
    $scope.clubCreateModel.show();
  }
  $scope.close = function(){
    $scope.clubCreateModel.hide(); 
  }
})
.controller('ClubDetailCtrl', function($scope, $stateParams, $ionicModal, $ionicPopup, ClubDetail){
  //for ng-include
  $scope.activityItemTemp = window.config.tempComponents.activityItemBig;

  var clubIndex = 'c' + $stateParams.clubId;
  $scope.detail = ClubDetail[clubIndex];
  $scope.isLogin = true;

  $scope.modelData = {
    name: {
      name: "俱乐部名称",
      info: $scope.detail.name
    },
    time: {
      name: "成立时间",
      info: $scope.detail.time
    },
    area: {
      name: "活动范围",
      info: $scope.detail.area
    },
    number: {
      name: "成员人数",
      info: $scope.detail.members,
      list: (function(){ var arr=[]; for(var i=0; i<998; i++){ arr[i] = i+2; }; return arr; })(),
      tip: "请选择成员人数"
    },
    extra: {
      name: "简介",
      info: $scope.detail.intro
    }
  }
  //弹层模型
  $ionicModal.fromTemplateUrl('joinClubModel', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.joinClubModel = modal;
  });
  // 当隐藏的模型时执行动作
  $scope.$on('modal.hide', function() { /* 当隐藏的模型时执行动作 */ });
  $scope.$on('modal.show', function() { /* 当展示的模型时执行动作 */ });

  //弹层模型
  $ionicModal.fromTemplateUrl('clubEditModel', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.clubEditModel = modal;
  });
  // 当隐藏的模型时执行动作
  $scope.$on('modal.hide', function() { /* 当隐藏的模型时执行动作 */ });
  $scope.$on('modal.show', function() { /* 当展示的模型时执行动作 */ });
  
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
  $scope.apply = function(){
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
  $scope.edit = function(){
    $scope.clubEditModel.show();
  }
  $scope.closeEditor = function(){
    $scope.clubEditModel.hide();
  }
})
.controller('AccountCtrl', function($scope, $rootScope, $ionicPopup, $ionicModal){
  // $scope.isLogin = $rootScope.isLogin || false;
  $scope.isLogin = true;
  $scope.modelData = window.config.accountModelData;
  //弹层模型
  $ionicModal.fromTemplateUrl('signinModel', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.signinModel = modal;
  });
  // 当隐藏的模型时执行动作
  $scope.$on('modal.hide', function() { /* 执行动作 */ });
  // 当隐藏的模型时执行动作
  $scope.$on('modal.show', function() { /* 执行动作 */ });
  
  $scope.signin = function(){
    $scope.signinModel.show();
  }
  $scope.close = function(){
    $scope.signinModel.hide();
  }
  $scope.signout = function(){
    $ionicPopup.confirm({
      title: '是否退出登录？'
    }).then(function(res) {
      if(res) {
        $scope.isLogin = false;
      }
    });
  }
  $scope.submitSignin = function(data){
    console.log(data);
    $scope.signinModel.hide();
    $scope.isLogin = true;
  }
})
.controller('AccountActivityCtrl', function($scope, $ionicPopup, $ionicModal, $ionicTabsDelegate, AccountActivity){
  //for ng-includes
  $scope.activityItemTemp = window.config.tempComponents.activityItemSmall;

  $scope.items = [
    { txt: "即将开始", type: 1 },
    { txt: "已结束", type: 2 }
  ];
  $scope.accountActivitys = AccountActivity.data1;
  console.log($ionicTabsDelegate);
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
    $scope.modelData = window.config.joinersListModelData["a"+id];
    console.log($scope.modelData);
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
    console.log(item);
    if(item.type == 1){
      $scope.accountActivitys = AccountActivity.data1;
    }else if(item.type == 2){
      $scope.accountActivitys = AccountActivity.data2;
    }
  }
})
.controller('AccountClubCtrl', function($scope, $ionicModal, AccountClub){
  //for ng-include
  $scope.clubItemTemp = window.config.tempComponents.clubItemTempSmall;

  $scope.accountClubs = AccountClub;

  //弹层模型
  $ionicModal.fromTemplateUrl('clubMembersListModel', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.clubMembersListModel = modal;
  });
  // 当隐藏的模型时执行动作
  $scope.$on('modal.hide', function() { /* 执行动作 */ });
  // 当隐藏的模型时执行动作
  $scope.$on('modal.show', function() { /* 执行动作 */ });

  //查看名单
  $scope.checkList = function(id){
    event.preventDefault();
    $scope.modelData = window.config.clubMembersListModelData["c"+id];
    $scope.clubMembersListModel.show();
  }
  $scope.close = function(){
    $scope.clubMembersListModel.hide();
  }
});





