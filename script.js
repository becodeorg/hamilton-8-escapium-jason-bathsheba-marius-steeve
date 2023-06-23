/*let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px 
function openNav() {
 sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 
function closeNav() {
 sidenav.classList.remove("active");
} */


function initMap() {
    // The location of Uluru
    const uluru = { lat: 40.782480, lng: -73.965594 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uluru,
      mapId:"6db813724fd5c7b2"
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      icon:"/hamilton-8-escapium-jason-bathsheba-marius-steeve/image/logo/gmap-logo.png",
      map: map,
    });
  }

  window.initMap = initMap;