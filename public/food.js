angular.module("foodApp", [])
.controller('SearchCtrl',['$scope', function($scope) {
  $scope.results = $scope.results || [{name: 'Results will display here',
    description: 'Search for details'}];
}]);
