'use strict';

/**
 * Angular2Elastic module.
 */
var a2eApp = angular.module('a2eApp', [ 'ui.bootstrap' ]);

// ===========
// Controllers
// ===========

/**
 * Main controller.
 */
a2eApp.controller('MainController', function($scope) {
	$scope.name = '';
	$scope.submitted = '';
	$scope.answered = '';

	$scope.sendToServer = function() {
		console.log("Sending to server...");
	};
});