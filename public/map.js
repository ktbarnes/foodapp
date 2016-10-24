angular.module('Map',['ngMap'])
.controller('MapCtrl', [ '$scope','NgMap', function($scope,NgMap) {


  var mapModule = this;

//  Limit search results to individual places. Keep in mind that there are still
// individual place markers for general places like zip codes & towns
  mapModule.types = "['establishment']";

//Change map location based on location submitted through search box
  mapModule.placeChanged = function() {
    mapModule.place = this.getPlace();
    console.log('location', mapModule.place.geometry.location);
    mapModule.map.setCenter(mapModule.place.geometry.location);
  }

//render Map
  NgMap.getMap().then(function(map) {
    mapModule.map = map;
  });

}]);
