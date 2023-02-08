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

Person.hey = function () {
  console.log('hello there 😉');
  console.log(this);
};
Person.hey();
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

// Classes
class PersonCl {
  constructor(FullName, birthYear) {
    this.FullName = FullName;
    this.birthYear = birthYear;
  }
  // methods will be added to prototype prop
  // Instance method
  calcAge() {
    const date = new Date();
    console.log(date.getUTCFullYear() - this.birthYear);
  }

  get age() {
    const date = new Date();
    return date.getUTCFullYear() - this.birthYear;
  }
  // prop already exist
  set FullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a fullName`);
    }
  }
  get FullName() {
    return this._fullName;
  }
  // static method
  static hey() {
    console.log('hey there 😉');
  }
}
const penguin = new PersonCl('king penguin', '2015');
PersonCl.hey();
console.log(penguin);
penguin.calcAge();

// add manually
PersonCl.prototype.greet = function () {
  console.log(`hello ${this.firstName}`);
};
penguin.greet();
console.log('age get:', penguin.age);

console.log((penguin.fullName = 'solar penguin'));
console.log(penguin.fullName);

// classes not hoisted
// first class citizens
// classes are executed in strict mode
const bear = new PersonCl('polar bear', 2000);

const account = {
  owner: 'jon',
  movements: [100, 200, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
console.log((account.latest = 900));
console.log(account.movements);

// ----------
const PersonProto = {
  calcAge() {
    const date = new Date();
    console.log(date.getUTCFullYear() - this.birthYear);
  },
  // programmatically
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const shawn = Object.create(PersonProto);
console.log(shawn);
shawn.name = 'Shawn';
shawn.birthYear = 1950;
shawn.calcAge();

console.log(shawn.__proto__ === PersonProto);

// better way
const victor = Object.create(PersonProto);
victor.init('victor', 2019);
victor.calcAge();

// coding Challenge #2
console.clear();

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    console.log(`${this.make} going at ${this.speed + 10}Km/h`);
  }

  break() {
    console.log(`${this.make} going at ${this.speed - 5}Km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.break();
ford.speedUS = 100;
ford.accelerate();
console.log(ford);
