'use strict';

angular.module('profileApp', ['ngRoute', 'profileApp.detail', 'profileApp.home'])


.config(['$routeProvider', function($routerProvider) {
	$routeProvider
		.otherwise({redirectTo: '/detail'});

}]);