// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'badminton' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'badminton.services' is found in services.js
// 'badminton.controllers' is found in controllers.js
angular.module('badminton', ['ionic', 'badminton.controllers', 'badminton.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('account', {
    url: '/account',
    templateUrl: 'templates/account.html',
    controller: 'AccountCtrl'
  })
  .state('account-activity', {
    url: '/account/activity',
    templateUrl: 'templates/account-activity.html',
    controller: 'AccountActivityCtrl'
  })
  .state('account-club', {
    url: '/account/club',
    templateUrl: 'templates/account-club.html',
    controller: 'AccountClubCtrl'
  })
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })
  .state('club', {
    url: '/club',
    templateUrl: 'templates/club.html',
    controller: 'ClubCtrl'
  })
  .state('club-detail', {
    url: '/club/:clubId',
    templateUrl: 'templates/club-detail.html',
    controller: 'ClubDetailCtrl'
  })
  .state('activity', {
    url: '/activity',
    templateUrl: 'templates/activity.html',
    controller: 'ActivityCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
