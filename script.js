const navButton = document.querySelector('.nav-button');
const navMenu = document.querySelector('.nav-menu');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

navButton.addEventListener('click', function() {
    line1.classList.toggle('change');
    line2.classList.toggle('change');
    line3.classList.toggle('change');

    if(navMenu.classList.contains('.bg-dark')) {
        navMenu.classList.remove('bg-dark');
    } else {
        navMenu.classList.add('bg-dark');
    }
});