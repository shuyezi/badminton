angular.module('badminton.controllers.activityDetail', [])

.controller('ActivityDetailCtrl', function($scope, $ionicModal, $ionicPopup, $stateParams, ActivityDetail, ActivityEdit, Clubs){
  $scope.winHeight = window.innerHeight;
  $scope.winWidth = window.innerWidth;
  var activityIndex = $stateParams.activityId;

  //for ng-include
  $scope.activityFormTemp = window.badminton.config.tempComponents.activityForm;

  ActivityDetail({id: activityIndex}).then(function(response){
    console.log('response', response);
    $scope.activityDetail = response.obj;  
  }, function(){});

  Clubs().then(function(response){
    $scope.clubNames = (function(){
      var _arr = [];
      for(var i in response.obj.list){
        _arr.push(response.obj.list[i].name);
      }
      return _arr;
    })();
  }, function(data){console.log(data)});

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
  $scope.modelSelect = {
    // number: window.badminton.utils.generateArray(99),
    // type: window.badminton.config.activityType
    number: window.badminton.utils.generateArray(99),
    activityType: window.badminton.config.activityType,
    type: window.badminton.config.status.edit
  };
  $scope.modelStatus = "";
  $scope.edit = function(){
    $scope.activity = $scope.activityDetail;
    if($scope.modelStatus === "hide"){
      $scope.activityModel.show();
    }else{
      $ionicModal.fromTemplateUrl('activityModel', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.activityModel = modal;
        $scope.activityModel.show();
      });
    }
  }
  $scope.close = function(){
    $scope.activityModel.hide();
  }
  $scope.submit = function(activityData){
    ActivityEdit(activityData).then(function(response){
      console.log('Data of Activity Add are: ', response.obj);
      if(response.success && response.success == 1){
        $ionicPopup.confirm({
          title: '是否提交活动修改？'
        }).then(function(res){
          if(res){
            $ionicPopup.alert({
              title: "修改成功!"
            }).then(function(){
              $scope.modelStatus = "";
              $scope.activityDetail = activityData;
              $scope.activityModel.remove();
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