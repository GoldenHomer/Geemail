'use strict';

angular.module('EmailApp', ['ngRoute'])
  .config(function ( $routeProvider ) {

  $routeProvider
    .when('/inbox', {
      templateUrl: 'views/inbox.html',
      controller: 'InboxCtrl',
    })
    .otherwise({
      redirectTo: '/inbox'
    });
});