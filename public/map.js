angular.module('foodmap',['ngMap'])
.controller('MapCtrl', [ '$scope','NgMap', function($scope,NgMap) {


  var mapModule = this;
  mapModule.types = "['establishment']";

//Change map location based on location submitted through search box
  mapModule.placeChanged = function() {
    mapModule.place = this.getPlace();
    console.log('location', mapModule.place.geometry.location);
    mapModule.map.setCenter(mapModule.place.geometry.location);
  }

  NgMap.getMap().then(function(map) {
    mapModule.map = map;
  });
  // NgMap.getMap().then(function(map) {
  //   console.log(map.getCenter());
  //   console.log('markers', map.markers);
  //   console.log('shapes', map.shapes);
  // });


}]);
