'use strict';

// * Boolean => True or False

// check boolean value
const x = Boolean(5 > 1);
console.log(x); //true

const y = 10 < 2;
console.log(y); //false

const sum = Boolean(10 + 1);
console.log(sum); // true

const falsy = Boolean(0 + -0);
console.log(falsy); // false

console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false

// Boolean object

const you = false;
const me = new Boolean(false);
console.log(me);

console.log(you === me);
console.clear();

function clix() {
  const value = document.querySelector('#age').value;
  const demos = document.querySelector('#demo');
  if (isNaN(value)) {
    demos.innerHTML = 'not a number';
  } else {
    // Ternary operator => statement ? if true : if false
    const isEl = value >= 18 ? 'eligible' : 'not eligible';
    demos.innerHTML = isEl;
  }
}
