

function initMap() {
    // The location of Uluru
    const Central_Park = { lat: 40.782480, lng: -73.965594 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: Central_Park,
      mapId:"6db813724fd5c7b2"
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: Central_Park,
      icon:"/hamilton-8-escapium-jason-bathsheba-marius-steeve/image/logo/gmap-logo.png",
      map: map,
    });
  }

  window.initMap = initMap;