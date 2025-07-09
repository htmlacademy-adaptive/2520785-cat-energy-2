const nav = document.querySelector('.nav');
const button = document.querySelector('.nav__toggle');
const sliderControl = document.querySelector('.slider__control');
const slider = document.querySelector('.slider');
nav.classList.add('nav--closed');

button.addEventListener('click', () => {
  nav.classList.toggle('nav--closed');
  nav.classList.toggle('nav--opened');
});

if (slider) {
  let flag = false;
  sliderControl.addEventListener('click', () => {
    if (!flag) {
      slider.classList.add('slider--after');
      flag = true;
    } else {
      slider.classList.toggle('slider--after');
      slider.classList.toggle('slider--before');
    }

  });
}
