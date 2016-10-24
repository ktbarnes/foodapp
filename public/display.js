angular.module('Display',[])
.controller('DisplayCtrl', [ '$scope','NgMap', 'Locations', '$route', function($scope, Map, Locations, $route) {
  $scope.address = $scope.address;
  $scope.location = $scope.location;
  $scope.route = $route;
  $scope.getLocation = function() {
    var locInfo = Locations.getLoc();
    $scope.address = locInfo.address;
    $scope.location = locInfo.location;
  }

  $scope.getLocation();
}]);
