/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
const formoSliders = document.querySelectorAll('.formo-slider');
formoSliders.forEach(formoSlider => {
  const sliderNav = formoSlider.querySelector('.sliderNav');
  const slides = formoSlider.querySelectorAll('.formo-slider-slide');
  const duration = formoSlider.getAttribute('data-duration');
  slides[0].classList.add('active');
  const delay = duration * 1000;
  let goToNextWithDelay = setInterval(goToNextSlide, delay);
  function goToNextSlide() {
    const activeSlide = formoSlider.querySelector('.active');
    const activeNavButton = formoSlider.querySelector('.button-active');
    const nextSlide = activeSlide.nextElementSibling;
    const nextNavButton = activeNavButton.nextElementSibling;
    if (nextSlide) {
      activeSlide.classList.remove('active');
      nextSlide.classList.add('active');
      activeNavButton.classList.remove('button-active');
      nextNavButton.classList.add('button-active');
    } else {
      activeSlide.classList.remove('active');
      slides[0].classList.add('active');
      activeNavButton.classList.remove('button-active');
      sliderNav.firstElementChild.classList.add('button-active');
    }
  }
  slides.forEach((slide, index) => {
    const slideNavButton = document.createElement('button');
    slideNavButton.classList.add('slideNavButton');
    if (index === 0) {
      slideNavButton.classList.add('button-active');
    }
    slideNavButton.addEventListener('click', () => {
      clearInterval(goToNextWithDelay);
      goToNextWithDelay = setInterval(goToNextSlide, delay);
      formoSlider.querySelector('.button-active')?.classList.remove('button-active');
      slideNavButton.classList.add('button-active');
      slides.forEach(slide => {
        slide.classList.remove('active');
      });
      slide.classList.add('active');
    });
    sliderNav.appendChild(slideNavButton);
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map