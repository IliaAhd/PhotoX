"use strict";

// Items & elements
const navButton = document.querySelector(".nav-button");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-link");
const banner = document.querySelector(".banner");

const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

const missionSection = document.querySelector(".mission-appear");
const cameraImage = document.querySelector(".camera-img");
const missionText = document.querySelector(".mission-text");

const pricingSection = document.querySelector("#pricing");
const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");

const galleryItems = document.querySelectorAll(".gallery-list-item");

const date = document.querySelector(".date");

// Hamburger menu
navButton.addEventListener("click", function () {
  line1.classList.toggle("change");
  line2.classList.toggle("change");
  line3.classList.toggle("change");
  navMenu.classList.toggle("bg-dark");
});

// Active nav item
// for (let i = 0; i < navItems.length; i++) {
//   navItems[i].addEventListener("click", function () {
//     for (let i = 0; i < navItems.length; i++) {
//       navItems[i].classList.remove("nav-active");
//     }
//     navItems[i].classList.toggle("nav-active");
//   });
// }

// Active gallery list item
for (let i = 0; i < galleryItems.length; i++) {
  galleryItems[i].addEventListener("click", function () {
    for (let i = 0; i < galleryItems.length; i++) {
      galleryItems[i].classList.remove("active-item");
    }
    galleryItems[i].classList.toggle("active-item");
  });
}

const observerOption = {
  root: null,
  treshold: 0.1,
};

// Sticky Navbar
const navChange = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) navMenu.classList.add("costume-navbar");
  else navMenu.classList.remove("costume-navbar");
};

const navObserver = new IntersectionObserver(navChange, observerOption);
navObserver.observe(banner);

// Mission section pictures appear
const missionAppear = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    missionText.classList.add("from-right");
    cameraImage.classList.add("from-left");
    document.body.style.overflowX = "hidden";
  } else {
    missionText.classList.remove("from-right");
    cameraImage.classList.remove("from-left");
    document.body.style.overflowX = "auto";
  }
};
const MissionObs = new IntersectionObserver(missionAppear, observerOption);
MissionObs.observe(missionSection);

// Pricing card appear
const cardAppaer = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    card1.classList.remove("moveFromLeft");
    card2.classList.remove("moveFromBottom");
    card3.classList.remove("moveFromRight");
    document.body.style.overflowX = "hidden";
  } else {
    card1.classList.add("moveFromLeft");
    card2.classList.add("moveFromBottom");
    card3.classList.add("moveFromRight");
    document.body.style.overflowX = "hidden";
  }
};
const pricingObs = new IntersectionObserver(cardAppaer, observerOption);
pricingObs.observe(pricingSection);

const sections = document.querySelectorAll("section");

// Show Active nav item
// const activeItem = function (entries) {
//   const [entry] = entries;
//   navItems.forEach((item) => item.classList.remove("nav-active"));
// };
// const itemObs = new IntersectionObserver(activeItem, observerOption);
// sections.forEach((section) => itemObs.observe(section));

// Gallery filter
document.addEventListener("DOMContentLoaded", function () {
  var galleryListItems = document.querySelectorAll(".gallery-list-item");
  galleryListItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var value = this.getAttribute("data-filter");
      var filters = document.querySelectorAll(".filter");
      filters.forEach(function (filter) {
        if (value === "all") {
          filter.style.display = "block";
          setTimeout(() => {
            filter.style.opacity = 1;
            filter.style.transition = "all 1s";
          }, 0);
        } else {
          if (!filter.classList.contains(value)) {
            filter.style.opacity = 0;
            filter.style.transition = "all 1s";
            setTimeout(() => {
              filter.style.display = "none";
              filter.style.transition = "all 1s";
            }, 300);
          } else {
            filter.style.display = "block";
            setTimeout(() => {
              filter.style.opacity = 1;
              filter.style.transition = "all 1s";
            }, 0);
          }
        }
      });
    });
  });
});

// Date
date.textContent = new Date().getFullYear();
