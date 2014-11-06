'use strict';

angular.module('GMApp', ['ngRoute'])
  .config(function ($routeProvider) {

  $routeProvider
    .when('/inbox', {
      templateUrl: 'views/inbox.html',
      controller: 'InboxCtrl',
    })
    .otherwise({
      redirectTo: '/inbox'
    });
});