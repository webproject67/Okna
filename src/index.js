import './sass/style.scss';

const svgModules = require.context('../src/img/svg', true, /\.svg$/);
svgModules.keys().forEach(svgModules);

// Отмена событий всех ссылок


document.querySelectorAll(`a`).forEach((elem) => elem.addEventListener('click', (evt) => evt.preventDefault()));


// Слайдер

const sliders = document.querySelectorAll(`.sliders__item`);
const btns = document.querySelectorAll(`.sliders__btn`);
let counter = 0;

const showSlaider = (btn, i) => {
  for(const btn of btns) btn.classList.remove('sliders__btn--active');
  btn.classList.add('sliders__btn--active');
  for(const slider of sliders) slider.classList.remove('sliders__item--active');
  sliders[i].classList.add('sliders__item--active');
}

btns.forEach((btn, i) => {
  btn.addEventListener('click', () => showSlaider(btn, i))
})

setInterval(() => {
  if (counter++ === 2) counter = 0;
  showSlaider(btns[counter], counter)
}, 3000);


// Форма

const form = document.querySelector(`.forms__form`);
const btn = form.querySelector(`.forms__btn`);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  btn.style.display = 'none';
  const newElement = document.createElement(`p`);
  newElement.style.fonFamily = 'Exo2';
  newElement.style.color = '#ffffff';
  newElement.style.fontSize = '25px';
  newElement.style.fontWeight = '700';
  newElement.style.textTransform = 'uppercase';
  newElement.textContent = `Спасибо! Заявка отправлена!`;
  form.insertBefore(newElement, null);
});


// Прокрутка

const scroll = document.querySelector('.scroll');
let scrolled;

document.addEventListener('scroll', function () {
  scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if(scrolled >= 900) {
    scroll.classList.add('scroll--opacity');
  } else {
    scroll.classList.remove('scroll--opacity');
  }
});

const scrollTop = () => {
  window.scrollBy(0,-100);
  if (scrolled > 0) requestAnimationFrame(scrollTop);
}

scroll.addEventListener('click', function (evt) {
  evt.preventDefault();
  scrollTop();
});

