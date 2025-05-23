'use strict';


// classes 🏛️ -> not an object / its a template
class Season {
  constructor(name, months) {
    this.name = name;
    this.months = months;
  }
  doc = () => {
    return `${this.name} in ${this.months}`;
  };
}

const winter = new Season('winter', 2);
console.log(winter.doc());


// ______________________________________________

class Rocket {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  time() {
    const date = new Date();
    return `${this.name} will reach at speed of ${this.speed} in ${date.getFullYear()}`;
  }
}
const rocket = new Rocket('LU20', 300);
console.log(rocket.time());


// class inheritance & get set
class Bike {
  constructor(name) {
    this.name = name;
  }
  show() {
    return `this is the latest model of ${this.name}`;
  }
}
const rx100 = new Bike('rx100');
console.log(rx100);

class Model extends Bike {
  constructor(name, model) {
    super(name);
    this.model = model;
  }
  variant() {
    return `${this.name} has new ${this.model}`;
  }
}

const bmw = new Model('bmw', 'EI');
console.log(bmw.model);


// get &  set

class Planet {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  get habit() {
    return `${this.name} Planet will habitable in ${this.year}`;
  }
  set habit(x) {
    this.name = x;
  }
}


const mars = new Planet('mars', 2040);

console.log(mars.habit);

mars.habit = 'io';
console.log(mars.habit);

// static method

class Biker {
  constructor(name) {
    this.name = name;
  }
  static show() {
    return `this is the latest model of ${this.name}`;
  }
}

console.log(Biker.show());
