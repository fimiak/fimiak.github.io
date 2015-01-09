var sfApp = angular.module('sfApp', ['ngRoute', 'sfAppControllers', 'sfAppServices', 'sfAppDirectives']);

sfApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'client/partials/about.html',
        controller: 'dbCtrl'
    })
      .when('/blog', {
        templateUrl: 'client/partials/blog.html',
        controller: ''
    })
      .when('/map', {
        templateUrl: 'client/partials/map.html',
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

var dbCtrl = angular.module('sfAppControllers', []);

dbCtrl.controller('dbCtrl', ['$scope', '$location', 'Box', function ($scope, $location, Box) {

  $scope.boxes = Box.query();
  $scope.orderProp = '-height';
  $scope.currentPage = 0;
  $scope.pageSize = 12;
  $scope.numberOfPages = function() {
    return Math.ceil($scope.boxes.length/$scope.pageSize);
  };
  for (var i=0; i<6; i++) {
    $scope.boxes.push(i);
  }
}]);

dbCtrl.controller('dtCtrl', ['$scope', '$routeParams', 'Box', function($scope, $routeParams, Box) {
  $scope.box = Box.get({boxId: $routeParams.boxId}, function(box) {
    $scope.mainImageUrl = box.images[0];
    });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  };
}]);


dbCtrl.filter('startFrom', function() {
  return function(input, start) {
    start = +start;
    return input.slice(start);
  };
});

var dbDir = angular.module('sfAppDirectives', []);

  dbDir.directive('activeLink', ['$location', function(location) {
    return {
      restrict: "A",
      link: function(scope, element, attrs, controller) {
        var clazz = attrs.activeLink;
        var path = attrs.href;
        path = path.substring(1);
        scope.location = location;
        scope.$watch('location.path()', function(newPath) {
          if (path === newPath) {
            element.addClass(clazz);
          } else {
            element.removeClass(clazz);
          }
        });
      }
    };
  }]);

function initialize() {
  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
      center: new google.maps.LatLng(44.5403, -78.5463),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions)
}
google.maps.event.addDomListener(window, 'load', initialize);
var dbServices = angular.module('sfAppServices', ['ngResource']);

dbServices.factory('Box', ['$resource', function($resource) {
  return $resource('client/json/:boxId.json', {}, {
    query: {method:'GET', params:{boxId:'boxes'}, isArray:true}
  });
}]);
