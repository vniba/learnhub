'use strict';

// const demo = document.querySelector('#demoOne');
// demo.innerHTML = 'DOM 📄';

// demo.style.color = '#0ff';
// demo.style.fontSize = '3rem';

// const btn = document.getElementsByTagName('button');

// btn[0].innerHTML = 'changed';

// document.querySelector('button').style.backgroundColor = 'blue';

// const butt = document.querySelector('#btnz');
// butt.addEventListener('click', () => {
//   let body = document.querySelector('body');
//   body.style.backgroundColor = 'gold';

//   // const box = document.querySelector('#box');
//   // box.classList.add(''hello'');
// });

// to find element  -> id, tag, class
// by css selector

// let boxed = document.querySelectorAll('#box h1');

// boxed[0].style.color = 'yellow';

// to change element
// --> innerHTML , set , innerText, style

// document.querySelector('#img').src = 'img/a_gangster_anime_by_darkbeam0_dfl5qdd-fullview.jpg';

// document.querySelector('#param').innerHTML = Date();

// for creating element
// const sub = document.createElement('h3');

// document.body.style.backgroundColor = 'green';
// console.log(document.body);
// console.clear();

// form function
// function validateForm() {
//   const form = document.forms[1]['fname'].value;
//   if (form === '') {
//     alert('name is empty');
//     return false;
//   }
//   console.log(form);

// }

const show = document.querySelector('#show');


// const btns = document.querySelector('#btns');
// btns.addEventListener('click', move);

function move() {
  let id = null;
  const child = document.querySelector('#animate');
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos === 150) {
      clearInterval(id);
    }
    else {
      pos++;
      child.style.top = pos + 'px';
    }
  }
}

// Events
const demo = document.querySelector('#demoOne');
// demo.addEventListener('click', () =>
//   demo.innerHTML = 'no way'
// );

// onclick
const demoBtn = document.querySelector('#demo').onclick = () =>
  demo.innerHTML = 'button clicked';

// onload
document.body.onload = () => console.log('page loaded');

// onchange
const inp = document.querySelector('#inTx');
// inp.addEventListener('change', () =>
//   demo.innerHTML = inp.value.toUpperCase()
// );

// onmouseover
const box = document.querySelector('.box');
// box.addEventListener('mouseover', () => {
//   box.style.backgroundColor = 'blue';
// });

// onmouseleave
// box.addEventListener('mouseleave', () =>
//   box.style.backgroundColor = 'violet'
// );

// onfocus
const foc = document.querySelector('#foc');
const fc = () => foc.style.backgroundColor = 'red';

// onblur
// foc.addEventListener('blur', () => foc.style.backgroundColor = 'violet');
// ondblclick
const db = document.querySelector('#db');
// db.addEventListener('dblclick', () => demo.innerHTML = 'double click'
// );

// reassign values !!!!

// EventListener
// addEventListener(event,cbf,capture)
// --> does not override
// --> no limit
// --> all DOM element
// --> bubbling -- capture
// --> easy to remove event

foc.addEventListener('click', () => demo.innerHTML = 'EventListener');

db.addEventListener('click', first);

function first() { db.innerHTML = `first event`; };

db.addEventListener('dblclick', second);

function second() {
  db.innerHTML = `second event`;
}

window.addEventListener('resize', () => demo.innerHTML = Math.random());

const p = document.querySelector('#par');
// passing params
let x = 10;
let y = 5;

box.addEventListener('click', () => calling(x, y));

function calling(z, x) {
  p.textContent = z + x;
}

document.querySelector('#inv').innerHTML = '';
// capture & bubbling
const cir = document.querySelector('#circ');
const cir2 = document.querySelector('#circ2');
const cirp = document.querySelector('#circp');
const cirp2 = document.querySelector('#circp2');

const circle = () => console.log('clicked on circ');
// bubble => child first
cir2.addEventListener("click",
  circle, false);

cir.addEventListener('click', () => console.log('clicked on square'), false);

// capture => parent first
cirp2.addEventListener("click", () => console.log('clicked on circ capture')
  , true);

cirp.addEventListener('click', () => console.log('clicked on square capture'), true);

// remove EventListener

cir2.addEventListener('dblclick', () => cirp.innerHTML = Math.random());

cir2.removeEventListener('click', circle);
