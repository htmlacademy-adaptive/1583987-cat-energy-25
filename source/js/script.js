let mainHeader = document.querySelector('.main-header')
let mainNav = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

mainHeader.classList.remove('main-header--nojs');
console.log(window.innerWidth);
console.log(document.documentElement.clientWidth);

if (window.innerWidth < 768) {
  mainNav.classList.remove('main-nav--opened');
  mainNav.classList.add('main-nav--closed');
}

navToggle.addEventListener('click', (e) => {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.remove('main-nav--opened');
    mainNav.classList.add('main-nav--closed');
  }
})
