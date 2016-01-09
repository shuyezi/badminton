angular.module('badminton.controllers', [])

.controller('AccountCtrl', function($scope, $ionicPopup) {
  $scope.isLogin = false;
  $scope.signin = function(){
    $scope.isLogin = true;
  }
  $scope.signout = function(){
    var confirmPopup = $ionicPopup.confirm({
      title: '是否退出登录？'
    });
    confirmPopup.then(function(res) {
      if(res) {
        $scope.isLogin = false;
      }
    });
  }
})
.controller('AccountActivityCtrl', function($scope, $ionicTabsDelegate, AccountActivity){
  var items = [
    {
      txt: "即将开始"
    },
    {
      txt: "已结束"
    }
  ];

  $scope.items = items;
  $scope.accountActivitys = AccountActivity;

  $scope.tabSelect = function(item){
    item.active = !item.active;
  }
  $scope.tabDelSelect = function(item){
    item.active = !item.active;
  }
  $scope.selectTabWithIndex = function(index) {
    $ionicTabsDelegate.select(index);
    console.log(index);
  }
})
.controller('AccountClubCtrl', function($scope, $ionicTabsDelegate){
  var items = [
    {
      txt: "我创建的"
    },
    {
      txt: "我参加的"
    }
  ];

  $scope.items = items;

  $scope.tabSelect = function(item){
    item.active = !item.active;
  }
  $scope.tabDelSelect = function(item){
    item.active = !item.active;
  }
  $scope.selectTabWithIndex = function(index) {
    $ionicTabsDelegate.select(index);
    console.log(index);
  }
})
.controller('HomeCtrl', function($scope, Home){
  $scope.home = Home;
})
.controller('ClubCtrl', function($scope, $ionicModal, Clubs){
  $scope.clubs = Clubs;
  $scope.modelData = {
    name: {
      name: "俱乐部名称",
      info: ""
    },
    time: {
      name: "成立时间",
      info: ""
    },
    area: {
      name: "活动范围",
      info: ""
    },
    number: {
      name: "成员人数",
      info: "",
      list: (function(){ var arr=[]; for(var i=0; i<998; i++){ arr[i] = i+2; }; return arr; })(),
      tip: "请选择成员人数"
    },
    extra: {
      name: "简介",
      info: "简介简介简介"
    }
  }
  //弹层模型
  $ionicModal.fromTemplateUrl('model', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  // 当隐藏的模型时执行动作
  $scope.$on('modal.hide', function() {
    // 执行动作
  });
  // 当隐藏的模型时执行动作
  $scope.$on('modal.show', function() {
    // 执行动作
  });

  //新建活动
  $scope.create = function(){
    $scope.modal.show();
  }

  //表单验证
  $scope.checkForm = function(data){
    console.log(data);
  }
})
.controller('ClubDetailCtrl', function($scope, $stateParams, $ionicModal, $ionicPopup, ClubDetail){
  var clubIndex = 'c' + $stateParams.clubId;
  $scope.detail = ClubDetail[clubIndex];
  $scope.isLogin = true;
  $scope.modelData = {
    applicant: {
      name: "申请人姓名",
      info: ""
    },
    sex: {
      name: "申请人性别",
      info: false//默认男
    },
    experience: {
      name: "球龄",
      info: ""
    },
    reason: {
      name: "写点儿理由",
      info: "理由理由"
    }
  }
  //活动详情
  $scope.showDetail = function(item){
    item.showdetail = !item.showdetail;
  }
  //弹层模型
  $ionicModal.fromTemplateUrl('model', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  // 当隐藏的模型时执行动作
  $scope.$on('modal.hide', function() {
    // 执行动作
  });
  // 当隐藏的模型时执行动作
  $scope.$on('modal.show', function() {
    // 执行动作
  });
  //加入俱乐部理由弹层
  $scope.join = function(){
    $scope.modal.show();
  }
  //验证表单信息
  $scope.checkForm = function(data){
    console.log(data);
  }
  //退出俱乐部
  $scope.out = function(item){
    var confirmPopup = $ionicPopup.confirm({
      title: '是否退出该俱乐部？'
    });
    confirmPopup.then(function(res) {
      if(res) {
        item.isMember = false;
      }
    });
  }

  //报名活动
  $scope.applyNow = function(item){
    var confirmPopup = $ionicPopup.confirm({
      title: '是否确认报名？'
    });
    confirmPopup.then(function(res) {
      if(res) {
        item.isApplied = true;
        item.permission = 1 ;
      }
    });
  }
})
.controller('ActivityCtrl', function($scope, $ionicModal, $ionicPopup, Activity){
  //数据初始化
  $scope.activitys = Activity;
  $scope.isLogin = true;
  $scope.modelData = {
    theme: {
      name: "活动主题",
      info: ""
    },
    time: {
      name: "活动时间",
      info: ""
    },
    address: {
      name: "活动地点",
      info: ""
    },
    number: {
      name: "活动人数",
      info: "",
      list: (function(){ var arr=[]; for(var i=0; i<98; i++){ arr[i] = i+2; }; return arr; })(),
      tip: "请选择参与活动人数"
    },
    fee: {
      name: "活动费用",
      info: ""
    },
    club: {
      name: "俱乐部",
      info: "",
      tip: "请选择俱乐部",
      list: ['源深俱乐部', '天山俱乐部', '虹桥俱乐部']
    },
    type: {
      name: "类型",
      info: "",
      tip: "请选择活动类型",
      list: ['常规', '联赛']
    },
    open: {
      info: false
    }
  }

  console.log($scope.activity);

  //活动详情
  $scope.showDetail = function(item){
    item.showdetail = !item.showdetail;
  }

  //弹层模型
  $ionicModal.fromTemplateUrl('model', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  // 当隐藏的模型时执行动作
  $scope.$on('modal.hide', function() {
    // 执行动作
  });
  // 当隐藏的模型时执行动作
  $scope.$on('modal.show', function() {
    // 执行动作
  });

  //新建活动
  $scope.create = function(){
    $scope.modal.show();
  }

  //表单验证
  $scope.checkForm = function(data){
    console.log(data);
  }

  //报名活动
  $scope.applyNow = function(item){
    var confirmPopup = $ionicPopup.confirm({
      title: '是否确认报名？'
    });
    confirmPopup.then(function(res) {
      if(res) {
        item.isApplied = true;
        item.permission = 1 ;
      }
    });
  }
});


