'use strict';

// function declaration
function names(z = 1, x = 2) {
  return z + x;
}
console.log(names(12, 2));

// function expression / anonymous function
const age = function (year) {
  return 2023 - year;
};

console.log(age(2001));

// function constructor --- !don't use ---
const sum = new Function('a,b', 'return a + b');

console.log(sum(4, 2));

// Hoisting
console.log(power(10));

function power(base) {
  return Math.log(base);
}

// self invoking function
(function () {
  console.log(`consequatur corporis non /lib`);
}());

// function values to variable
function random() {
  return Math.trunc(Math.random() * 10);
}
const rand = random();
console.log(rand);

// to get arguments length
function args(a, b, c) {
  return arguments.length;
}
console.log(args(1, 2, 3));

// object methods
const toStr = args(2, 3, 4).toString();
console.log(toStr);

// => function
const water = () => `h2o`;
console.log(water());

// no this
const base = {
  proton: 1,
  electron: -1,
  neutron: 0,
  atom: () => {
    return this.proton;
  }
};
console.log(base.atom());


// no typechecks in args
function quark(up, down) {
  return up * down;
}
console.log(quark('s', 1));

// setting default values
function total(a, b = 0) {
  return a + b;
}
console.log(total(10));

console.clear();

function maxe() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

console.log(maxe(6, 1, 7, 3, 6, 1.8, 10e1));

function sumAll() {
  let sum = 0;
  for (let index = 0; index < arguments.length; index++) {
    sum += arguments[index];
  }
  return sum;
}
console.log(sumAll(90, 70, 10));
