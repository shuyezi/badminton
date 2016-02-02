angular.module('badminton.controllers.activity', [])

.controller('ActivityCtrl', function($scope, $ionicModal, $ionicPopup, Activity, ActivityAdd, Clubs){
  //for ng-include
  $scope.activityItemTemp = window.badminton.config.tempComponents.activityItemBig;
  $scope.activityFormTemp = window.badminton.config.tempComponents.activityForm;

  //数据初始化
  Activity().then(function(response){
    $scope.activitys = response.obj;
  }, function(data){
    console.log(data);
  });

  Clubs().then(function(response){
    $scope.clubNames = (function(){
      var _arr = [];
      for(var i in response.obj.list){
        _arr.push(response.obj.list[i].name);
      }
      return _arr;
    })();
  }, function(data){console.log(data)});

  $scope.modelSelect = {
    number: window.badminton.utils.generateArray(99),
    activityType: window.badminton.config.activityType,
    type: "add",
    title: "新建活动"
  };

  //弹层模型
  $scope.modelStatus = "";
  $scope.create = function(){
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
    $scope.modelStatus = "hide";
    $scope.activityModel.hide();
  }
  $scope.submit = function(activityData){
    ActivityAdd(activityData).then(function(response){
      console.log('Data of Activity Add are: ', response.obj);
      if(response.success && response.success == 1){
        $ionicPopup.confirm({
          title: '是否提交新增活动？'
        }).then(function(res){
          if(res){
            $ionicPopup.alert({
              title: "添加成功!"
            }).then(function(){
              $scope.modelStatus = "";
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
});