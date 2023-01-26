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


const btns = document.querySelector('#btns');
btns.addEventListener('click', move);

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
