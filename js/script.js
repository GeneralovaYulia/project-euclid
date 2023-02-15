let burger = document.querySelector(".burger");
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__link');


burger.addEventListener('click', function () {

    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--visible');
    document.body.classList.toggle('stop-scroll');
  });

menuLinks.forEach(function(el){
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--visible');
    document.body.classList.remove('stop-scroll');
  });
});




let loop = document.querySelector(".loop");
let formHeader = document.querySelector(".form__header");
let closed = document.querySelector(".closed");

loop.addEventListener('click', function () {
  formHeader.classList.toggle('formHeader--active');
  });

closed.addEventListener('click', function () {
  formHeader.classList.remove('formHeader--active');
  });




const swiper = new Swiper('.swiper__container', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper__pagination',
    clickable: true,
  },
});




const tabsBtn = document.querySelectorAll('.tabs-nav__btn');
const tabsItem = document.querySelectorAll('.tabs-content');

tabsBtn.forEach(el => {
  el.addEventListener('click', (e) => {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(el => el.classList.remove('tabs-nav__btn--active'));
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(el => el.classList.remove('tabs-content--active'));
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-content--active');
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(function(el) {
    el.addEventListener('click', function(e) {
      const control = e.currentTarget.querySelector('.accordion__control');
      const content = e.currentTarget.querySelector('.accordion__content');

      e.currentTarget.classList.toggle('accordion--active');
    });
  });
});
