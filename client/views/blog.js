'use strict';

angular.module('profileApp.blog', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/blog', {
		templateUrl: 'client/views/blog.html',
		controller: 'blogCtrl'
	});
}])

.controller('blogCtrl', ['$scope', function($scope) {

}]);