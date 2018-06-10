function myMap() {
  var pos = {lat: 41.361142, lng: 1.9863898};
  var map = new google.maps.Map(document.getElementById('mapFooter'), {
    zoom: 16,
    center: pos,
    mapTypeId: google.maps.MapTypeId.HYBRID
  });
  var marker = new google.maps.Marker({
    position: pos,
    map: map
  });
}





			