'use strict'
const output = document.querySelector('#demoOne')

const pi = Math.PI
output.innerHTML = pi

const e = Math.E
console.log("euler's", e);

console.log("sqrt of 2", Math.SQRT2);
console.log("sqrt of 1/2", Math.SQRT1_2);
console.log("natural logarithm 2", Math.LN2);
console.log("natural logarithm 10", Math.LN10);
console.log("natural logarithm base 2 e", Math.LOG2E);


// Math methods

// 4 methods to round the integers

console.log(Math.round(pi)); // .5 based

console.log(Math.ceil(-3.2), '&', Math.ceil(3.2)); // small value >= num

console.log(Math.floor(-3.2), '&', Math.floor(3.2)); // great value <= num

console.log(Math.trunc(pi)); // return integer part


// if x is positive or negative or zero
console.log(Math.sign(-4));
console.log(Math.sign(4));
console.log(Math.sign(0));

console.log(Math.pow(2, 3));

console.log(Math.sqrt(100));

console.log(Math.abs(-5.1));

// sin value b/w 1 & -1
console.log(Math.sin(90 * pi / 180));

console.log(Math.cos(180 * pi / 360));

console.log(Math.min(-1, 2, -3, 0, 4, 5,));

console.log(Math.max(1, 2, 3, 4, 5,));

console.log(Math.log(8));


console.clear();

// Random

const rand = Math.random()

console.log(rand);
function calcRand(min, max) {

  return Math.floor(Math.random() * max - min) + min
}

const btns = document.querySelector('#btn')
btns.addEventListener('click', () => {
  output.innerHTML = Math.floor(Math.random() * (20 - 10)) + 10

})
