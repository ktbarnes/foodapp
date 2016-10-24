angular.module("foodApp", ['FileUpload','ngRoute','foodServices','Map', 'Trending'])
.config(function($routeProvider) {
  $routeProvider
  .when('/display', {
    templateUrl: 'views/display.html',
  })
  .when('/trending', {
    templateUrl: 'views/trending.html',
    controller: 'TrendingCtrl'
  })
  .when('/upload', {
    templateUrl: 'views/upload.html',
    controller: 'UploadCtrl'
  })
  .otherwise({
    redirectTo: '/trending.html'
  });
})
.controller('SearchCtrl',['$scope', function($scope) {
  $scope.results = $scope.results || [{name: 'Results will display here',
    description: 'Search for details'}];
}]);
