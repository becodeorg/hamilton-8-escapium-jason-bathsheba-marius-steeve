const burgerIcon = document.querySelector("#burgerIcon");
const burgermenu = document.querySelector(
  ".header_nav_container_list_all_page"
);
const containerItemBurgerMenu = document.querySelectorAll(
  ".header_nav_container_list_all_page"
);
const loginGlass = document.querySelector(".login_glass");

burgerIcon.addEventListener("click", function () {
  burgermenu.classList.toggle("active");
  if (burgermenu.classList.contains("active")) {
    loginGlass.classList.add("active-symbol");
  } else {
    loginGlass.classList.remove("active-symbol");
  }
});

containerItemBurgerMenu.forEach((elem) => {
  elem.addEventListener("click", function () {
    burgermenu.classList.toggle("active");
  });
});
