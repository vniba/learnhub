'use strict';
const Person = function (fName, bYear) {
  // instant props
  this.fName = fName;
  this.bYear = bYear;

  //  never use method in constructor func
};

const jon = new Person('jon', 2001);
console.log(jon);

const mint = new Person('mint', 1980);
console.log(mint);

// new {} is created
//  function called, this => {}
// {} linked to prototype
// function automatically return {data}

console.log(jon instanceof Person);

// Prototype
Person.prototype.calcAge = function () {
  const date = new Date();
  console.log(date.getUTCFullYear() - this.bYear);
};

console.log(Person.prototype);

jon.calcAge();
mint.calcAge();
console.log(jon.__proto__);
console.log(jon.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jon));

Person.prototype.Species = 'Homo Sapiens';

console.log(jon.hasOwnProperty('Species'));

console.log(jon.__proto__);
// Object.prototype
console.log(jon.__proto__.__proto__);

const arr = [1, 1, 2, 3, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

// not good 😀😀
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.log(h1.__proto__);
console.dir(a => a);

console.clear();

// coding challenge #1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log(`${this.make} going at ${this.speed + 10}Km/h`);
};

Car.prototype.brake = function () {
  console.log(`${this.make} going at ${this.speed - 5}Km/h`);
};
const tesla = new Car('tesla', 120);

tesla.accelerate();
tesla.brake();
