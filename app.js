'use strict';

angular.module('profileApp', ['ngResource', 'ngRoute', 'profileApp.detail', 'profileApp.home', 'profileAppServices', 'ngAnimate'])


.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.otherwise({redirectTo: '/'
	});
}]);