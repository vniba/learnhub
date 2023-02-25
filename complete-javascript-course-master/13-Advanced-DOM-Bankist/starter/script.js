'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const navigation = document.querySelector('.nav');

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
//
// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView();
//   });
// });

// btn scroll
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

// event delegation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  // match
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
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

// style
// msg.style.backgroundColor = '#888';

// console.log(getComputedStyle(msg).fontFamily);

// // css variable
// document.documentElement.style.setProperty('--color-primary', 'red');
// // attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.src);
// logo.alt = 'minimalist';

// console.log(logo.getAttribute('src'));
// const tw = document.querySelector('.twitter-link');
// console.log(tw.href);

// data attributes

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

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('link', e.target, e.currentTarget);

//   // stop event -- not good
//   // e.stopPropagation();
// // });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('container', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('nav', e.target, e.currentTarget);
//   },
//   true
// );

// DOM Traversing

// // downwards
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);

// h1.firstElementChild.style.color = 'red';
// h1.lastElementChild.style.color = 'yellow';

// // going upwards
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary';

// // sideways -> siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(e => {
//   if (e !== h1) {
//     e.style.transform = 'scale(0.5)';
//   }
// });

// tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsCont = document.querySelector('.operations__tab-container');

const tabsContent = document.querySelectorAll('.operations__content');

tabsCont.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  // remove
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // active tab

  clicked.classList.add('operations__tab--active');

  // activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function (e) {
  // console.log(this);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(s => {
      if (s !== link) {
        s.style.opacity = this;
        logo.style.opacity = this;
      }
    });
  }
};

navigation.addEventListener('mouseover', handleHover.bind(0.5));

navigation.addEventListener('mouseout', handleHover.bind(1));

// const initialCords = section1.getBoundingClientRect();
// console.log(initialCords);
// // Sticky navigation
// window.addEventListener('scroll', function (e) {
//   this.window.scrollY > initialCords.top
//     ? navigation.classList.add('sticky')
//     : navigation.classList.remove('sticky');
// });

// intersection observer API

// const obsCall = function (entries, observer) {
//   entries.forEach(e => {
//     console.log(e);
//   });
// };
// const obsOpt = {
//   root: null,
//   threshold: [0, 0.2],
// };
// const observer = new IntersectionObserver(obsCall, obsOpt);
// observer.observe(section1);

const head = document.querySelector('.header');
const navHeight = navigation.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;

  !entry.isIntersecting
    ? navigation.classList.add('sticky')
    : navigation.classList.remove('sticky');
};
const headObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${navHeight}px`,
});
headObserver.observe(head);

// revel
const allSections = document.querySelectorAll('section');
const revelSec = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  else entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revelSec, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (sec) {
  sectionObserver.observe(sec);
  // sec.classList.add('section--hidden');
});

// lazy loading images
const imgTarget = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', e => {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTarget.forEach(img => imgObserver.observe(img));

// Slider

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const bntRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let currentSlide = 0;
  const maxSlide = slides.length;

  // functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dots => dots.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const moveSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const nextSlide = function () {
    {
      if (currentSlide === maxSlide - 1) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }

      moveSlide(currentSlide);
      activateDot(currentSlide);
    }
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
      moveSlide(currentSlide);
      activateDot(currentSlide);
    }
  };
  const init = function () {
    moveSlide(0);
    createDots();
    activateDot(0);
  };
  init();
  // Event Handlers
  bntRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    }
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      moveSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

// document.addEventListener('DOMContentLoaded', e => {
//   console.log(e);
// });

// window.addEventListener('load', e => console.log(e));

// !depreciated
// window.addEventListener('beforeunload', e => {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = ' ';
// });
