var sfApp = angular.module('sfApp', ['ngRoute', 'sfAppControllers', 'sfAppServices', 'sfAppDirectives']);

sfApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'client/partials/about.html',
        controller: 'dbCtrl'
    })
      .when('/about', {
        templateUrl: 'client/partials/about.html',
        controller: 'dbCtrl'
    })
      .when('/blog', {
        templateUrl: 'client/partials/blog.html',
        controller: ''
    })
      .when('/:boxId', {
        templateUrl: 'client/partials/database.html',
        controller: 'dtCtrl'
    })
      .otherwise({
        redirectTo: '/'
    });

  }]);
