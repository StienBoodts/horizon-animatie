// Showing map and home pin - Google tutorial

function initMap() {
    const horizon = { lat: 51.25463217634249, lng: 2.9819950190502347};
    const seaLife = { lat: 51.31815377413242, lng: 3.145796440478582};
    const horizonEducatief = { lat: 51.23966828124294, lng: 2.9385712521145586};
    const hangTime = { lat:51.23817291526946, lng: 2.939153238042269};

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: horizon,
    });

    const horizonMarker = new google.maps.Marker({
      position: horizon,
      map: map,
    });

    const seaLifeMarker = new google.maps.Marker({
        position: seaLife,
        map: map,
    });


    const horizonEducatiefMarker = new google.maps.Marker({
        position: horizonEducatief,
        map: map,
    });

    const hangTimeMarker = new google.maps.Marker({
        position: hangTime,
        map: map,
    });


  }
  
  window.initMap = initMap;


