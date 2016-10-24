angular.module("foodApp", ['FileUpload','ngRoute','foodServices','Map', 'Trending', 'Display'])
.config(function($routeProvider) {
  $routeProvider
  .when('/display', {
    templateUrl: 'views/display.html',
    controller: 'DisplayCtrl'
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
