
// Showing map and pins - Google tutorial
let map;

function initMap() {

    // coordinates for Horizon

    const horizon = { lat: 51.25463217634249, lng: 2.9819950190502347};

    // insert map centered on Horizon
    
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: horizon,
    });

    // activity coordinates and info

    const activities = [
      {
        position: new google.maps.LatLng(51.31815377413242, 3.145796440478582),
        name: "seaLife",
        info: `
        <h3>Sea Life</h3>
        <p>Discover the magic of the underwater world.
        Come face to face with wildlife and learn all about how we can help ocean conservation.<br>
        Opening Hours: 10:00 - 17:00<br>
        Price: €15/person</p>`,
      },
      {
        position: new google.maps.LatLng(51.23966828124294, 2.9385712521145586),
        name: "horizonEducatief",
        info: `
        <h3>Horizon Educatief</h3>
        <p>Choose from a wide range of educational and artistic guided activities.<br>
        From exploring the dunes, learning all about plankton to meeting Pirate Pete.<br>
        Opening Hours: 10:00 - 17:00<br>
        Price: Depends on activity.</p>`,
      },
      {
        position: new google.maps.LatLng(51.23817291526946, 2.939153238042269),
        name: "hangTime",
        info: `
        <h3>Hangtime</h3>
        <p>The best trampoline park around!<br>
        Hangtime also has an amazing wooden indoor play area!<br>
        Opening Hours: 10:00 - 17:00<br>
        Price: £8/person</p>`
      },
      {
        position: new google.maps.LatLng(51.23001282640668, 2.9619333025990624),
        name: "spuikom",
        info: `
        <h3>VVW Inside</h3>
        <p>From sailing to building aquadrones.<br>
        Guaranteed fun within biking distance!<br>
        Opening Hours: 09:00 - 19:00<br>
        Price: £15/person</p>`
      },
      {
        position: new google.maps.LatLng(51.303612498470386, 3.08606321389479),
        name: "surfingelephant",
        info: `
        <h3>Surfing Elephant</h3>
        <p>The coolest surfclub around.<br>
        4 watersports in a day.<br>
        Opening Hours: 09:00 - 19:00<br>
        Price: £20/person</p>`
      },
      {
        position: new google.maps.LatLng(51.28504266161536, 3.0612400675016076),
        name: "centerparcs",
        info: `
        <h3>Center Parcs</h3>
        <p>Aquamundo<br>
        Tropical indoor pool for all ages.<br>
        Opening Hours: 10:00 - 18:00<br>
        Price: £8/person</p>`
      },
      
    ];

    // loop over coordinates and add them onto map
    // show info when marker is clicked

    for (let i = 0; i < activities.length; i++) {
      const marker = new google.maps.Marker({
        position: activities[i].position,
        map: map,
      });
      marker.addListener("click", function() {
        document.getElementById("activityInfo").innerHTML = activities[i].info;
      })
    }

    // add marker for Horizon

    const horizonMarker = new google.maps.Marker({
      position: horizon,
      map: map,
    });

    // Show alert when Horizon is clicked 

    horizonMarker.addListener("click", () => {
    alert("You are staying here!");
    });

  }
  
window.initMap = initMap;

// get activityInfo and add it onto the selection list

$(document).ready(function() {
  $("#addToItinerary").on("click", function() {
      $("#selection").append($("#activityInfo").html());
      $("#quoteMe").on("click", function() {
        // add selection list to hidden input on form to get quote
        let selection = $("#selection").text();
        $("#selectioninform").val(selection);
      });
    });
});
