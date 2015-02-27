'use strict';

angular.module('profileApp', ['ngResource', 'ngRoute', 'profileApp.blog', 'profileApp.home', 'profileApp.detail', 'profileAppServices', 'ngAnimate'])


.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.otherwise({redirectTo: '/'
	});
}]);