'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnCloseModal);

// for showing modal
const openmodal = () => {
  console.log('button clicked ⏭️');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// looping through openmodal classes

for (const iterator of btnsOpenModal) {
  iterator.addEventListener('click', openmodal);
}

// for closing modal
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// closing button
btnCloseModal.addEventListener('click', closeModal);
/* btnCloseModal.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}); */

// closing whin click on overlay
overlay.addEventListener('click', closeModal);
/* overlay.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}); */

//! respond to keyboard events
// when escape key press close the modal
document.addEventListener('keydown', event => {
  console.log(event.key);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
