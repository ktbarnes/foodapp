angular.module("foodApp", ['ngRoute', 'uiGmapgoogle-maps', 'foodApp.map'])

.config(function ($routeProvider, uiGmapGoogleMapApiProvider) {

  uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'mapController'
    })

})

