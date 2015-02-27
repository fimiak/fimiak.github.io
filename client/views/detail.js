'use strict';

angular.module('profileApp.detail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/:projectId', {
		templateUrl: 'client/views/detail.html',
		controller: 'detailCtrl'
	});
}])

.controller('detailCtrl', ['$scope', '$routeParams', 'Project', function($scope, $routeParams, Project) {

  $scope.projects = Project.get({projectId: $routeParams.projectId}, function(project) {
  	
  });

}]);