'use strict';

angular.module('EmailApp')
  .directive('inbox', function inbox () {
    return {
      restrict: 'EA', // element, attribute
      replace: true,
      scope: true,
      templateUrl: "templates/inboxTemplate.html",
      controllerAs: 'inbox',

      controller: function (InboxFactory) {
        
        this.messages = [];

        this.goToMessage = function (id) {
          InboxFactory.goToMessage(id);
        };
        
        this.deleteMessage = function (id, index) {
          InboxFactory.deleteMessage(id, index);
        };
        
        InboxFactory.getMessages()
          .then( angular.bind( this, function then() {
              this.messages = InboxFactory.messages;
            }) );
      },

      link: function (scope, element, attrs, ctrl) { // arguments don't have $ prepended in the link function by convention
      }
    }
  });