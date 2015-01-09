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
