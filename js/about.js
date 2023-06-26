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

const accordion = document.querySelectorAll(".container_question_faq");
console.log(accordion);
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    console.log("bonjour");
    for (let j = 0; j < accordion.length; j++) {
      if (j !== i && accordion[j].classList.contains("active")) {
        accordion[j].classList.remove("active");
      }
    }

    this.classList.toggle("active");
  });
}

const btnPlay = document.querySelector(".about_btn_play");
const containerMedia = document.querySelector(".container_media_youtube");

btnPlay.addEventListener("click", function (event) {
  console.log("BONJOUR");
  event.preventDefault();
  containerMedia.classList.toggle("active_media");
});

containerMedia.addEventListener("click", function () {
  containerMedia.classList.toggle("active_media");
});
