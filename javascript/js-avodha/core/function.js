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

function hellos(a, z) {
  return a - z;
}

console.log(window.hellos(10, 2));

const diary = {
  name: 'hellos',
  killer: true,
  full() {
    return this;
  }
};
console.log(diary.full());

// constructor
function Continent(name, population) {
  this.name = name;
  this.population = population;
}

const spellIt = new Continent('asia', 330);
console.log(spellIt);

// call method
const jewels = {
  ring: 'diamond',
  watch: 'gold'
  , jewelz(name) {
    return `${name}'s jewels are ${this.ring} ring & ${this.watch} watch`;
  }
};

const jewels2 = {
  ring: 'gold',
  watch: 'steel'
};

console.log(jewels.jewelz('azure'));
console.log(jewels.jewelz.call(jewels2, 'loki'));

//apply
const jewels3 = {
  ring: 'platinum',
  watch: 'led'
};
console.log(jewels.jewelz.apply(jewels3, ['Vernice']));


const sums = Math.max.apply(null, [1, 2, 34, 3]);
console.log(sums);

const plant = {
  name: 'cactus',
  lifeSpan: 1000,

  bioData() {
    return `${this.name} has life Span of ${this.lifeSpan} years`;
  }
};
const plant2 = {
  name: 'coconut tree',
  lifeSpan: 50
};

const plants = plant.bioData.bind(plant2);
console.log(plants());

const watter = {
  name: 'mixed fruit',
  quantity: 180
  ,
  label() {
    let xz = document.querySelector('#demoOne').innerHTML = `${this.name} ${this.quantity}`;
  }
};

// setTimeout(() => {
//   watter.label();
// }, 3000);
const out = watter.label.bind(watter);
setTimeout(out, 3000);

console.clear();

// function closures
// --< global variable to local variable
const queen = 20;//-global
function ant() {
  let queen = 1;//-local
  console.log(queen);
}
ant();

function moneyPlant() {
  console.log(queen * 100);

}
moneyPlant();

(function adds() {
  let counter = 0;
  function h2o() {
    counter += 1;
    return counter;
  }
  console.log(counter);

}());

