'use strict';

const demo = document.querySelector('#demoOne');
demo.innerHTML = 'DOM 📄';

demo.style.color = '#0ff';
demo.style.fontSize = '3rem';

const btn = document.getElementsByTagName('button');

btn[0].innerHTML = 'changed';

document.querySelector('button').style.backgroundColor = 'blue';

// const butt = document.querySelector('#btnz');
// butt.addEventListener('click', () => {
//   let body = document.querySelector('body');
//   body.style.backgroundColor = 'gold';

//   // const box = document.querySelector('#box');
//   // box.classList.add(''hello'');
// });

// to find element  -> id, tag, class
// by css selector

let boxed = document.querySelectorAll('#box h1');

// boxed[0].style.color = 'yellow';

// to change element
// --> innerHTML , set , innerText, style

// document.querySelector('#img').src = 'img/a_gangster_anime_by_darkbeam0_dfl5qdd-fullview.jpg';

// document.querySelector('#param').innerHTML = Date();

// for creating element
const sub = document.createElement('h3');

document.body.style.backgroundColor = 'green';
console.log(document.body);
console.clear();

// form function
function validateForm() {
  const form = document.forms[1]['fname'].value;
  if (form === '') {
    alert('name is empty');
    return false;
  }
  console.log(form);

}
