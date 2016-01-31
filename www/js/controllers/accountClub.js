angular.module('badminton.controllers.accountClub', [])

.controller('AccountClubCtrl', function($scope, $ionicModal, AccountClub, UserList){
  //for ng-include
  $scope.clubItemTemp = window.badminton.config.tempComponents.clubItemTempSmall;

  // $scope.accountClubs = AccountClub;
  AccountClub().then(function(response){
    $scope.accountClubs = response.obj;
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
      $scope.userList = response.obj;  
    }, function(){});
    $scope.clubMembersListModel.show();
  }
  $scope.close = function(){
    $scope.clubMembersListModel.hide();
  }
})