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
