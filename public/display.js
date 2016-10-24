angular.module('Display',[])
.controller('DisplayCtrl', [ '$scope','NgMap', 'Locations', function($scope, Map, Locations) {
  $scope.address = $scope.address;
  $scope.location = $scope.location;
  $scope.getLocation = function() {
    var locInfo = Locations.getLoc();
    $scope.address = locInfo.address;
    $scope.location = locInfo.location;
  }

  $scope.getLocation();
}]);
