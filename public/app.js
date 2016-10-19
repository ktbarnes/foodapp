function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 13
  });

  var input = document.getElementById('pac-input');

  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', map);

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var infowindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({
    map: map
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  autocomplete.addListener('place_changed', function() {
    infowindow.close();
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      return;
    }

    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    // Set the position of the marker using the place ID and location.
    marker.setPlace({
      placeId: place.place_id,
      location: place.geometry.location
    });
    marker.setVisible(true);

    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
        'Place ID: ' + place.place_id + '<br>' +
        place.formatted_address);
    infowindow.open(map, marker);
  });
}

/*

TODO: how to access the json objects for id, name, website, rating
  etc.

*/

// service.getDetails({
//           placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4'
//         }, function(place, status) {
//           if (status === google.maps.places.PlacesServiceStatus.OK) {
//             var marker = new google.maps.Marker({
//               map: map,
//               position: place.geometry.location
//             });
//             google.maps.event.addListener(marker, 'click', function() {
//               infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
//                 'Place ID: ' + place.place_id + '<br>' +
//                 place.formatted_address + '</div>');
//               infowindow.open(map, this);
//             });
//           }
//         });