angular.module('foodmap',['ngMap'])
.controller('MapCtrl', [ '$scope','NgMap', function($scope,NgMap) {

  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });

  //COPY AND PASTED FROM app.js
  // autocomplete.addListener('place_changed', function() {
  //   infowindow.close();
  //   var place = autocomplete.getPlace();
  //   if (!place.geometry) {
  //     return;
  //   }

  //   if (place.geometry.viewport) {
  //     map.fitBounds(place.geometry.viewport);
  //   } else {
  //     map.setCenter(place.geometry.location);
  //     map.setZoom(17);
  //   }

  //   // Set the position of the marker using the place ID and location.
  //   marker.setPlace({
  //     placeId: place.place_id,
  //     location: place.geometry.location
  //   });
  //   marker.setVisible(true);

  //   $scope.place = place;

  //   infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
  //     'Place ID: ' + place.place_id + '<br>' +
  //     place.formatted_address + '<br>' + place.reviews[0].text);
  //   infowindow.open(map, marker);

  //   console.log(place);
  // });

}]);