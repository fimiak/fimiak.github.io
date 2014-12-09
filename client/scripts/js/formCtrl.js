function formCtrl($scope) {
  $scope.master = {};
  $scope.update = function(contact) {
    $scope.master = angular.copy(contact);
  };

  $scope.reset = function() {
    $scope.contact = angular.copy($scope.master);
  };

  $scope.isUnchanged = function(contact) {
    return angular.equals(contact, $scope.master);
  };

  $scope.contact = {};

  $scope.reset();
}
