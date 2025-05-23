'use strict';

// API -> Application Programming Interface
// web API

const submit = document.querySelector('#submit');
const input = document.querySelector('#name');
const password = document.querySelector('#pass');
const h3 = document.querySelector('h3');

// submit.addEventListener('click', () => {

//   if (input.checkValidity()) {
//     h3.innerHTML = 'ok';
//   } else {
//     h3.innerHTML = input.validationMessage;
//   }
// });

// local storage

submit.addEventListener('click', () => {

  localStorage.setItem(input.value, password.value);
});
localStorage.removeItem('ai-lover');
console.log();


sessionStorage.setItem('name', 'adolf hitler');
sessionStorage.setItem('name2', 'eichmann hitler');
// sessionStorage.clear();
console.log(localStorage.key(0));
console.log(sessionStorage.key(2));
console.log(localStorage.length);

console.clear();

// Fetch()
fetch('core/random.html').then(x => x.text(), y => y.text()).then(suc => h3.innerHTML = suc);

// with async
async function getFile(file) {
  const fi = await fetch(file);
  const fiText = await fi.text();

  h3.innerHTML = fiText;
}

getFile('core/faker.html');

// geolocation AP(I

// TODO : geolocation
