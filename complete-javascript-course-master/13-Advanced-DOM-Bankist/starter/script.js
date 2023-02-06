'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overla y');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// selecting element
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const secAll = document.querySelectorAll('.section');
console.log(secAll);

document.getElementById('section--1');
const btnAll = document.getElementsByTagName('button');
console.log(btnAll);

document.getElementsByClassName('btn');

// creating and inserting elements
// insertAdjacentHTML
// -----------
const msg = document.createElement('div');
msg.classList.add('cookie-message');
// msg.textContent = 'we use cookies for improved user Experience';
msg.innerHTML =
  'we use cookies for improved user Experience <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(msg);
header.append(msg);
// header.append(msg.cloneNode(true));

// header.before(msg);
// header.after(msg);

// delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => msg.remove());
console.clear();
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', event => {
  const s1coords = section1.getBoundingClientRect();

  // scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // old -- way
  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  // new
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

const h1 = document.querySelector('h1');
const hA = event => {
  // alert('Great ....');
};
h1.addEventListener('mouseenter', hA);

// old way
// h1.onmouseenter = () => alert('hello');

// to remove event listener
setTimeout(() => {
  h1.removeEventListener('mouseenter', hA);
}, 2000);

// event propagation
// bubbling & capturing

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('link', e.target, e.currentTarget);

  // stop event -- not good
  // e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('container', e.target, e.currentTarget);
});
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('nav', e.target, e.currentTarget);
  },
  true
);

// DOM Traversing

// downwards
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'red';
h1.lastElementChild.style.color = 'yellow';

// going upwards
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary';

// sideways -> siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(e => {
  if (e !== h1) {
    e.style.transform = 'scale(0.5)';
  }
});
