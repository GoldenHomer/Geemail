'use strict';

angular.module('GMApp')
  .factory('InboxFactory', function InboxFactory ($q, $http, $location) {
    var exports = {};

    exports.getMessages = function () {
      return $http.get('json/emails.json')
        .error(function (data) {
          console.log('There was an error!', data);
        });
    };

    return exports;
  });