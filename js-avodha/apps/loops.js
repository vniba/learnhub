'use strict';

//* Loops

// for
const here = document.querySelector('#here');
const veg = ['carrot 🥕', 'chilli 🌶️', 'cucumber 🥒', 'onion 🧅', 'broccoli🥦'];
let y = '';

for (let i = 0; i < veg.length; i++) {
  y += `${veg[i]} <br>`;
}
// here.innerHTML = y;

let x = '';

// for of -- loop through iterable
for (const iterator of veg) {
  x += `${iterator} <br>`;
}
here.innerHTML = x;

// for in -- loop through object
const user = {
  firsName: 'lille',
  lastName: 'nou',
  age: 24,
};
for (const key in user) {
  console.log(user[key]);
}
// for of !again
const array = [1, 2, 3, 4, 5, 6]
let out = ''

for (const element of array) {
  out += `${element} ❤️ <br>`
}
here.innerHTML = out

// for of  -- strings
const lan = 'rust'

for (const val of lan) {
  console.log(val + '🪆')
}

// while loops
let i = 0
while (i < 5) {
  console.log(`${i} 🧠`)
  i++
}

// do while loops -- this run least one time if the condition is also false
let j = 5
do {
  console.log(`${j} 🦕`);
  j--
} while (j > 10);
console.log(30);

// Break & Continue

// break -- jump out of that block of loop and don't run
// continue -- omit one time from loop and continue run

// break
let not = ''
for (let i = 0; i < 7; i++) {
  if (i === 3) {
    break
  }
  not += `the man is 👉 ${i} `
}
console.log(not);

// continue
let yes = ''
for (let i = 0; i < 7; i++) {
  if (i === 3) {
    continue
  }
  yes += `the ... is 👉 ${i} `
}
console.log(yes);

console.clear();
let shot = ''
console.log(veg);
for (const iterator of veg) {
  if (iterator === 'cucumber 🥒')
    break
  shot += `${iterator} <br>`
}
here.innerHTML = shot