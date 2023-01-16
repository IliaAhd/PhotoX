const navButton = document.querySelector(".nav-button");
const navMenu = document.querySelector(".nav-menu");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

const cameraImage = document.querySelector(".camera-img");
const missionText = document.querySelector(".mission-text");

navButton.addEventListener("click", function () {
  line1.classList.toggle("change");
  line2.classList.toggle("change");
  line3.classList.toggle("change");
  navMenu.classList.toggle("bg-dark");
});

window.onscroll = function () {
  if (
    document.body.scrollTop >= 200 ||
    document.documentElement.scrollTop >= 200
  ) {
    navMenu.classList.add("costume-navbar");
  } else {
    navMenu.classList.remove("costume-navbar");
  }

  if (
    document.body.scrollTop >= 650 ||
    document.documentElement.scrollTop >= 650
  ) {
    missionText.classList.add("from-right");
    cameraImage.classList.add("from-left");
  } else {
    missionText.classList.remove("from-right");
    cameraImage.classList.remove("from-left");
  }
};





document.addEventListener("DOMContentLoaded", function() {
  var galleryListItems = document.querySelectorAll('.gallery-list-item');
  galleryListItems.forEach(function(item) {
    item.addEventListener('click', function() {
      var value = this.getAttribute('data-filter');
      var filters = document.querySelectorAll('.filter');
      filters.forEach(function(filter) {
        if (value === 'all') {
            filter.style.display = 'block';
            setTimeout(() => {
              filter.style.opacity = 1;
              filter.style.transition = "all 1s";
            }, 0);
        } else {
            if (!filter.classList.contains(value)) {
                filter.style.opacity = 0;
                filter.style.transition = "all 1s";
                setTimeout(() => {
                  filter.style.display = 'none';
                  filter.style.transition = "all 1s";
                }, 300);
            } else {
              filter.style.display = 'block';
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

// const galleryItems = document.querySelectorAll('.gallery-list-item');

// for (const galleryItem of galleryItems) {
//   galleryItem.addEventListener('click', function() {
//     galleryItem[i].classList.add('active-item')
//     console.log(galleryItem[i]);
//   });
// }