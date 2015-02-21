'use strict';

angular.module('profileApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'client/views/home.html',
		controller: 'homeCtrl'
	});
}])

.controller('homeCtrl', ['$scope', '$location', 'Project', '$anchorScroll', function($scope, $location, Project, $anchorScroll) {

  $scope.projects = Project.query();

 $scope.about = function() {
 	$location.url('/');
 	$location.hash('footer');
 	$anchorScroll();
 };

 $scope.skills = function() {
 	$location.url('/');
 	$location.hash('skills');
 	$anchorScroll();
 };

 $scope.work = function() {
  	$location.url('/');
 	$location.hash('work');
 	$anchorScroll();
 };

 $scope.intro = function() {
 	$location.url('/');
 	$location.hash('intro');
 	$anchorScroll();
 };
}]);