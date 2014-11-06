'use strict';

angular.module('GMApp')
	.controller('InboxCtrl', 
		function InboxCtrl($scope, InboxFactory) {
		$scope.meta = {title:"My Inbox"};

		InboxFactory.getMessages()
			.success(function(jsonData, statusCode){
				console.log('The request was successful!', statusCode);
	            console.dir(jsonData);
	            // Now add the Email messages to the controller's scope
	            $scope.data = {
	              emails: jsonData
	            };
			});
		});