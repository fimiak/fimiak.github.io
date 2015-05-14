var sfApp = angular.module('sfApp', ['ngRoute', 'sfAppControllers', 'sfAppServices', 'sfAppDirectives']);

sfApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'client/views/about.html',
        controller: 'dbCtrl'
    })
      .when('/about', {
        templateUrl: 'client/views/about.html',
        controller: 'dbCtrl'
    })
      .when('/:boxId', {
        templateUrl: 'client/views/database.html',
        controller: 'dtCtrl',
    })
      .otherwise({
        redirectTo: '/'
    });

  }]);
