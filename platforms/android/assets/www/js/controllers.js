angular.module('badminton.controllers', [])

.controller('HomeCtrl', function($scope, Home){
  Home().then(function(response){
    $scope.home = response;
  }, function(){});
})
.controller('LoginCtrl', function($scope, $rootScope, $state){
  $scope.submit = function(loginData){
    $rootScope.isLogin = true;
    $state.go('account');
    console.log('loginData', loginData);
  }
})
.controller('RegisterCtrl', function($scope, $ionicHistory){
  $scope.submit = function(){
    // $ionicHistory.goBack();
  }
})
.controller('ActivityCtrl', function($scope, $ionicModal, $ionicPopup, Activity){
  //for ng-include
  $scope.activityItemTemp = window.badminton.config.tempComponents.activityItemBig;

  //数据初始化
  Activity().then(function(response){
    $scope.activitys = response.activitys;
    $scope.clubNames = response.clubNames;
  }, function(){});

  $scope.activity = {
    number: window.badminton.utils.generateArray(99),
    type: window.badminton.config.activityType
  };

  $scope.status = window.badminton.config.status.create;

  //弹层模型
  $ionicModal.fromTemplateUrl('activityModel', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.activityModel = modal;
  });
  // 当隐藏的模型时执行动作
  $scope.$on('modal.hide', function() { /* 执行动作 */ });
  // 当展示的模型时执行动作
  $scope.$on('modal.show', function() { /* 执行动作 */ });

  $scope.create = function(){
    $scope.activityModel.show();
  }
  $scope.edit = function(){
    $scope.status = window.badminton.config.status.edit;
    $scope.activityModel.show();
  }
  $scope.close = function(){
    $scope.activityModel.hide(); 
  }

  $scope.submit = function(activityData){
    console.log('activityData', activityData, $scope.status);
  }
  $scope.loadMore = function(){
  /*$scope.$broadcast('scroll.refreshComplete');
    $http.get('/activitys')
      .success(function(newItems) {
        $scope.items = newItems;
      })
      .finally(function() {
        // Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');
      });
  */
  }
})
.controller('ActivityDetailCtrl', function($scope, $ionicModal, $ionicPopup, $stateParams, ActivityDetail){
  console.log('xx', $stateParams);
  $scope.winHeight = window.innerHeight;
  $scope.winWidth = window.innerWidth;
  var activityIndex = 'a' + $stateParams.activityId;
  ActivityDetail({id: activityIndex}).then(function(response){
    $scope.activityDetail = response;  
  }, function(){});
  $scope.isLogin = true;

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
  $scope.clubItemTemp = window.badminton.config.tempComponents.clubItemTempSmall;

  // 数据初始化
  Clubs().then(function(response){
    $scope.clubs = response;
  });

  $scope.club = {
    number: window.badminton.utils.generateArray(999)
  }

  $scope.status = window.badminton.config.status.create;

  //弹层模型
  $ionicModal.fromTemplateUrl('clubModel', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.clubModel = modal;
  });
  // 当隐藏的模型时执行动作
  $scope.$on('modal.hide', function() { /* 执行动作 */ });
  // 当隐藏的模型时执行动作
  $scope.$on('modal.show', function() { /* 执行动作 */ });

  $scope.create = function(){
    $scope.clubModel.show();
  }
  $scope.edit = function(){
    $scope.status = window.badminton.config.status.edit;
    $scope.clubModel.show();
  }
  $scope.close = function(){
    $scope.clubModel.hide(); 
  }
  $scope.submit = function(clubData){
    console.log('clubData', clubData, $scope.status);
  }
})
.controller('ClubDetailCtrl', function($scope, $stateParams, $ionicModal, $ionicPopup, ClubDetail){
  //for ng-include
  $scope.activityItemTemp = window.badminton.config.tempComponents.activityItemBig;

  var clubIndex = 'c' + $stateParams.clubId;
  ClubDetail({id: clubIndex}).then(function(response){
    $scope.detail = response;

    $scope.club = {
      name: $scope.detail.name,
      time: $scope.detail.time,
      area: $scope.detail.area,
      number: window.badminton.utils.generateArray(999),
      intro: $scope.detail.intro
    }
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
  $scope.edit = function(){
    $scope.clubModel.show();
  }
  $scope.closeEditor = function(){
    $scope.clubModel.hide();
  }
  $scope.submit = function(club){
    console.log('club', club);
  }
})
.controller('AccountCtrl', function($scope, $rootScope, $ionicPopup, $ionicModal){
  // $scope.isLogin = $rootScope.isLogin || false;
  $scope.isLogin = true;
  $scope.modelData = window.badminton.config.accountModelData;
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
.controller('AccountActivityCtrl', function($scope, $ionicPopup, $ionicModal, $ionicTabsDelegate, AccountActivity, UserList){
  //for ng-includes
  $scope.activityItemTemp = window.badminton.config.tempComponents.activityItemSmall;

  $scope.items = [
    { txt: "即将开始", type: 1 },
    { txt: "已结束", type: 2 }
  ];
  var activitysObj = {};
  AccountActivity().then(function(response){
    $scope.accountActivitys = response[0];
    activitysObj = response;
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
    UserList().then(function(response){
      $scope.userList = response["a"+id];  
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
    console.log(item);
    if(item.type == 1){
      $scope.accountActivitys = activitysObj[0];
    }else if(item.type == 2){
      $scope.accountActivitys = activitysObj[1];
    }
  }
})
.controller('AccountClubCtrl', function($scope, $ionicModal, AccountClub, UserList){
  //for ng-include
  $scope.clubItemTemp = window.badminton.config.tempComponents.clubItemTempSmall;

  // $scope.accountClubs = AccountClub;
  AccountClub().then(function(response){
    $scope.accountClubs = response;
  }, function(){});

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
    // $scope.modelData = window.badminton.config.clubMembersListModelData["c"+id];
    UserList().then(function(response){
      $scope.userList = response["c"+id];  
    }, function(){});
    $scope.clubMembersListModel.show();
  }
  $scope.close = function(){
    $scope.clubMembersListModel.hide();
  }
})
.controller('AccountInfoCtrl', function($scope, $ionicModal, UserInfo){
  
  UserInfo().then(function(response){
    $scope.userInfo = response;
  }, function(){});

  //弹层模型
  $ionicModal.fromTemplateUrl('InfoEditModel', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.infoEditModel = modal;
  });
  // 当隐藏的模型时执行动作
  $scope.$on('modal.hide', function() { /* 执行动作 */ });
  // 当隐藏的模型时执行动作
  $scope.$on('modal.show', function() { /* 执行动作 */ });

  //弹出层
  $scope.editName = function(){}
});