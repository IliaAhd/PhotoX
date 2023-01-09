const navButton = document.querySelector(".nav-button");
const navMenu = document.querySelector(".nav-menu");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

navButton.addEventListener("click", function () {
  line1.classList.toggle("change");
  line2.classList.toggle("change");
  line3.classList.toggle("change");
  navMenu.classList.toggle("bg-dark");
});

window.onscroll = function() {
  if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
    navMenu.classList.add('costum-navbar');
} else {
    navMenu.classList.remove('costum-navbar');
}
};
