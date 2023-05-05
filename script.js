'use strict'

// Items & elements
const navButton = document.querySelector(".nav-button");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-link");
const banner = document.querySelector(".banner");

const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

const cameraImage = document.querySelector(".camera-img");
const missionText = document.querySelector(".mission-text");

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
for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function () {
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove("nav-active");
    }
    navItems[i].classList.toggle("nav-active");
  });
}

// Active gallery list item
for (let i = 0; i < galleryItems.length; i++) {
  galleryItems[i].addEventListener("click", function () {
    for (let i = 0; i < galleryItems.length; i++) {
      galleryItems[i].classList.remove("active-item");
    }
    galleryItems[i].classList.toggle("active-item");
  });
}

// Sticky Navbar
const navChange = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) navMenu.classList.add("costume-navbar");
  else navMenu.classList.remove("costume-navbar");
};

const navObserver = new IntersectionObserver(navChange, {
  root: null,
  treshold: 0.1,
});
navObserver.observe(banner);

// window.onscroll = function () {

//   if (
//     document.body.scrollTop >= 800 ||
//     document.documentElement.scrollTop >= 800
//   ) {
//     missionText.classList.add("from-right");
//     cameraImage.classList.add("from-left");
//     document.body.style.overflowX = "hidden";
//   } else {
//     missionText.classList.remove("from-right");
//     cameraImage.classList.remove("from-left");
//     document.body.style.overflowX = "auto";
//   }

//   if (
//     document.body.scrollTop >= 3400 ||
//     document.documentElement.scrollTop >= 3400
//   ) {
//     card1.classList.add("moveFromLeft");
//     card2.classList.add("moveFromBottom");
//     card3.classList.add("moveFromRight");
//     document.body.style.overflowX = "hidden";
//   } else {
//     card1.classList.remove("moveFromLeft");
//     card2.classList.remove("moveFromBottom");
//     card3.classList.remove("moveFromRight");
//     document.body.style.overflowX = "auto";
//   }

//   if (
//     document.body.scrollTop >= 600 ||
//     document.documentElement.scrollTop >= 600
//   ) {
//     document.querySelector(".nav-zero").classList.remove("nav-active");
//   } else if (
//     document.body.scrollTop <= 600 ||
//     document.documentElement.scrollTop <= 600
//   ) {
//     document.querySelector(".nav-zero").classList.add("nav-active");
//   }

//   if (
//     (600 <= document.body.scrollTop && document.body.scrollTop <= 1600) ||
//     (600 <= document.documentElement.scrollTop &&
//       document.documentElement.scrollTop <= 1600)
//   ) {
//     document.querySelector(".nav-one").classList.add("nav-active");
//   } else if (
//     (600 >= document.body.scrollTop && document.body.scrollTop >= 1600) ||
//     600 >= document.documentElement.scrollTop ||
//     document.documentElement.scrollTop >= 1600
//   ) {
//     document.querySelector(".nav-one").classList.remove("nav-active");
//   }

//   if (
//     (1600 <= document.body.scrollTop && document.body.scrollTop <= 2700) ||
//     (1600 <= document.documentElement.scrollTop &&
//       document.documentElement.scrollTop <= 2700)
//   ) {
//     document.querySelector(".nav-three").classList.add("nav-active");
//   } else if (
//     (1600 >= document.body.scrollTop && document.body.scrollTop >= 2700) ||
//     1600 >= document.documentElement.scrollTop ||
//     document.documentElement.scrollTop >= 2700
//   ) {
//     document.querySelector(".nav-three").classList.remove("nav-active");
//   }

//   if (
//     (2700 <= document.body.scrollTop && document.body.scrollTop <= 3500) ||
//     (2700 <= document.documentElement.scrollTop &&
//       document.documentElement.scrollTop <= 3500)
//   ) {
//     document.querySelector(".nav-four").classList.add("nav-active");
//   } else if (
//     (2700 >= document.body.scrollTop && document.body.scrollTop >= 3500) ||
//     2700 >= document.documentElement.scrollTop ||
//     document.documentElement.scrollTop >= 3500
//   ) {
//     document.querySelector(".nav-four").classList.remove("nav-active");
//   }

//   if (
//     (3500 <= document.body.scrollTop && document.body.scrollTop <= 4300) ||
//     (3500 <= document.documentElement.scrollTop &&
//       document.documentElement.scrollTop <= 4300)
//   ) {
//     document.querySelector(".nav-five").classList.add("nav-active");
//   } else if (
//     (3500 >= document.body.scrollTop && document.body.scrollTop >= 4300) ||
//     3500 >= document.documentElement.scrollTop ||
//     document.documentElement.scrollTop >= 4300
//   ) {
//     document.querySelector(".nav-five").classList.remove("nav-active");
//   }

//   if (
//     (4300 <= document.body.scrollTop && document.body.scrollTop <= 5700) ||
//     (4300 <= document.documentElement.scrollTop &&
//       document.documentElement.scrollTop <= 5700)
//   ) {
//     document.querySelector(".nav-six").classList.add("nav-active");
//   } else if (
//     (4300 >= document.body.scrollTop && document.body.scrollTop >= 5700) ||
//     4300 >= document.documentElement.scrollTop ||
//     document.documentElement.scrollTop >= 5700
//   ) {
//     document.querySelector(".nav-six").classList.remove("nav-active");
//   }

//   if (
//     document.body.scrollTop >= 5700 ||
//     document.documentElement.scrollTop >= 5700
//   ) {
//     document.querySelector(".nav-seven").classList.add("nav-active");
//   } else if (
//     document.body.scrollTop <= 5700 ||
//     document.documentElement.scrollTop <= 5700
//   ) {
//     document.querySelector(".nav-seven").classList.remove("nav-active");
//   }

//   if (
//     document.body.scrollTop >= 5200 ||
//     document.documentElement.scrollTop >= 5200
//   ) {
//     for (let i = 0; i < galleryItems.length; i++) {
//       for (let i = 0; i < galleryItems.length; i++) {
//         galleryItems[i].classList.remove("active-item");
//       }
//     }
//     document.querySelector(".gallery-list-item").classList.add("active-item");

//     const filter = document.querySelectorAll(".filter");

//     for (let i = 0; i < filter.length; i++) {
//       filter[i].style.display = "block";
//       filter[i].style.opacity = "1";
//     }
//   }
//   console.log(scrollY);
// };

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
