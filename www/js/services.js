angular.module('badminton.services', [])

.factory('Home', function($http) {
  var _url = window.badminton.config.reqApi.index;
  return function(data){
    return window.badminton.utils.get(_url, data);
  }
})
.factory('Clubs', function(){
  var _url = window.badminton.config.reqApi.clubList;
  return function(data){
    return window.badminton.utils.get(_url, data);
  }
})
.factory('ClubAdd', function(){
  var _url = window.badminton.config.reqApi.clubAdd;
  return function(data){
    return window.badminton.utils.post(_url, data);
  }
})
.factory('ClubEdit', function(){
  var _url = window.badminton.config.reqApi.clubEdit;
  return function(data){
    return window.badminton.utils.post(_url, data);
  }
})
.factory('ClubDetail', function(){
  var _url = window.badminton.config.reqApi.clubDetail;
  return function(data){
    return window.badminton.utils.get(_url, data);
  }
})
.factory('Activity', function(){
  var _url = window.badminton.config.reqApi.activityList;
  return function(data){
    return window.badminton.utils.get(_url, data);
  }
})
.factory('ActivityAdd', function(){
  var _url = window.badminton.config.reqApi.activityAdd;
  return function(data){
    return window.badminton.utils.post(_url, data);
  }
})
.factory('ActivityEdit', function(){
  var _url = window.badminton.config.reqApi.activityEdit;
  return function(data){
    return window.badminton.utils.post(_url, data);
  }
})
.factory('ActivityDetail', function(){
  var _url = window.badminton.config.reqApi.activityDetail;
  return function(data){
    return window.badminton.utils.get(_url, data);
  }
})
.factory('AccountActivity', function(){
  var _url = window.badminton.config.reqApi.accountActivity;
  return function(data){
    return window.badminton.utils.get(_url, data);
  }
})
.factory('AccountClub', function(){
  var _url = window.badminton.config.reqApi.accountClub;
  return function(data){
    return window.badminton.utils.get(_url, data);
  }
})
.factory('UserInfo', function(){
  var _url = window.badminton.config.reqApi.userInfo;
  return function(data){
    return window.badminton.utils.get(_url, data);
  }
})
.factory('UserInfoEdit', function(){
  var _url = window.badminton.config.reqApi.userInfoEdit;
  return function(data){
    return window.badminton.utils.post(_url, data);
  }
})
.factory('Register', function(){
  var _url = window.badminton.config.reqApi.register;
  return function(data){
    return window.badminton.utils.post(_url, data);
  }
})
.factory('Login', function(){
  var _url = window.badminton.config.reqApi.login;
  return function(data){
    return window.badminton.utils.post(_url, data);
  }
})
.factory('UserList', function(){
  var _url = window.badminton.config.reqApi.userList;
  return function(data){
    return window.badminton.utils.get(_url, data);
  }
});