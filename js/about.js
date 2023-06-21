function updateText() {
  const subtitleElement = document.querySelector(".header_about_link");

  if (window.innerWidth > 768) {
    subtitleElement.innerText = "HOME";
  } else if (window.innerWidth <= 768) {
    subtitleElement.innerText = "ESCAPIUM";
  }
}

updateText();

window.addEventListener("resize", function () {
  updateText();
});
