let mainNav = document.querySelector ('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', (e) => {
if (mainNav.classList.contains('main-nav--closed'))
{mainNav.classList.remove('main-nav--closed');
  mainNav.classList.add('main-nav--opened');}
else {mainNav.classList.remove('main-nav--opened');
  mainNav.classList.add('main-nav--closed');
  }
})
