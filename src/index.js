import './sass/style.scss';

const svgModules = require.context('../src/img/svg', true, /\.svg$/);
svgModules.keys().forEach(svgModules);

const sliders = document.querySelectorAll(`.sliders__item`);
const btns = document.querySelectorAll(`.sliders__btn`);

btns.forEach((btn, i) => {
  const index = i;
  btn.addEventListener('click', () => {
    for(const btn of btns) btn.classList.remove('sliders__btn--active');
    btn.classList.add('sliders__btn--active');
    for(const slider of sliders) slider.classList.remove('sliders__item--active');
    sliders[i].classList.add('sliders__item--active');
  })
})

