
const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-slide');
const dots = document.querySelectorAll('.slider-dot');
let i;

const reset = () => dots.forEach((dot) => dot.classList.remove('active'));

function slideTo(n) {
  track.style.transform = `translateX(-${n * slides[0].offsetWidth}px)`;
  reset();
  dots[n].classList.add('active');
}

function activateArrows(direction) {
  direction === 'right' ? i++ : i--; 
  if (i < 0) i = 0;
  if (i > slides.length-1) i = slides.length-1;
  slideTo(i);
}

function activateDots(e) {
  i = e.target.dataset.index;
  slideTo(i);
}

function activate(e) {
  e.target.matches('.slider-dot') && activateDots(e);
  e.target.matches('.arrow-right') && activateArrows('right');
  e.target.matches('.arrow-left') && activateArrows();
}

function init(n) {
  i = n;
  slideTo(n);
}

fetch('https://6477ac529233e82dd53c0481.mockapi.io/account')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })

document.addEventListener('click',activate,false);
window.addEventListener('load',init(1),false);



