const lineCarrousel = document.querySelectorAll(".header_line_carousel");
const header = document.querySelector("header");

lineCarrousel.forEach((elem, index) => {
  elem.addEventListener("click", (event) => {
    if (index === 0) {
      header.style.background = 'url("../image/gallery/slide-3.jpg")';
      elem.classList.add("hover-effect");
      elem.classList.remove("hover");
      console.log("BONJOUR");
    }
    header.style.backgroundSize = "cover";
    header.style.backgroundRepeat = "no-repeat";
  });
});
