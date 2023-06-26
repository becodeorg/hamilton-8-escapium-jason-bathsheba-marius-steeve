const slideContainer = document.querySelector(".about_slide_container");
const slides = document.querySelectorAll(".about_article_testimonials");
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
let currentIndex = 0;

rightArrow.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % slides.length;
  const scrollLeftValue = slides[currentIndex].offsetLeft;
  slideContainer.scrollTo({
    left: scrollLeftValue,
    behavior: "smooth",
  });
});

leftArrow.addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  const scrollLeftValue = slides[currentIndex].offsetLeft;
  slideContainer.scrollTo({
    left: scrollLeftValue,
    behavior: "smooth",
  });
});