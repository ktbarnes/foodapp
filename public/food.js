angular.module("foodApp", ['fileUpload','ngRoute','foodServices','foodmap', 'Display'])
.config(function($routeProvider) {
  $routeProvider
  .when('/search', {
    templateUrl: 'views/search.html',
  })
  .when('/display', {
    templateUrl: 'views/display.html',
    controller: 'SearchCtrl'
  })
  .when('/upload', {
    templateUrl: 'views/upload.html',
    controller: 'UploadCtrl'
  })
  .otherwise({
    redirectTo: '/search'
  });
})
.controller('SearchCtrl',['$scope', function($scope) {
  $scope.results = $scope.results || [{name: 'Results will display here',
    description: 'Search for details'}];
}]);

