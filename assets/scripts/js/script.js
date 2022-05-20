
// coordinates for activities

const horizon = { lat: 51.25463217634249, lng: 2.9819950190502347};
const seaLife = { lat: 51.31815377413242, lng: 3.145796440478582};
const horizonEducatief = { lat: 51.23966828124294, lng: 2.9385712521145586};
const hangTime = { lat:51.23817291526946, lng: 2.939153238042269};

// Showing map and pins - Google tutorial

function initMap() {

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

    horizonMarker.addListener("click", () => {
    document.getElementById("activity-info").innerHTML = `
    <h3>You are staying here!</h3>`;
    });

    seaLifeMarker.addListener("click", () => {
      document.getElementById("activity-info").innerHTML = `
      <h3>Sea Life</h3>
      <p>Discover the magic of the underwater world.
      Come face to face with wildlife and learn all about how we can help ocean conservation.<br>
      Opening Hours: 10:00 - 17:00<br>
      Price: €15/person</p>`;
      });


  }
  
window.initMap = initMap;

let activityInfo = getElementById("activity-info").innerHTML;

let addToItinerary = getElementById("addToItinerary");

let itinerary = [];

addToItinerary.addListener('click', function() {
  itinerary.push(activityInfo);
})



