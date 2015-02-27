var service = angular.module('profileAppServices', ['ngResource']);

service.factory('Project', ['$resource', function($resource) {
  return $resource('client/json/:projectId.json', {}, {
    query: {method:'GET', params:{projectId:'projects'}, isArray:true}
  });
}]);
