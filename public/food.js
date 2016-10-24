angular.module("foodApp", ['fileUpload','ngRoute','foodServices','foodmap', 'Trending'])
.config(function($routeProvider) {
  $routeProvider
  .when('/search', {
    templateUrl: 'views/search.html',
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
