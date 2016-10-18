angular.module("foodApp", ['foodApp.map', 'uiGmapgoogle-maps', 'ngRoute'])

.config(function ($routeProvider, uiGmapGoogleMapApiProvider) {

  uiGmapGoogleMapApiProvider.configure({
           key: 'AIzaSyAGoCtNm9gWFTk8qqXmWBsVbnfVEmeyiHk',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'mapController'
    })

})

