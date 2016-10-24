angular.module('Display',[])
.controller('DisplayCtrl', [ '$scope','NgMap', 'Locations', function($scope, Map, Locations) {
  $scope.address = $scope.address;
  $scope.location = $scope.location;

  $scope.getLocation = function() {
    var locInfo = Locations.getLoc();
    $scope.address = locInfo.address;
    $scope.location = locInfo.location;
  }

  $scope.isActive = function(route) {
    console.log(route, $location.path());
    return route === $location.path();
  }

  $scope.getLocation();
  setInterval($scope.getLocation,500);

}]);
