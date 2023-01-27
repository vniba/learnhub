'use strict';

// import { head } from '../../17-Modern-JS-Modules-Tooling/final/dist/script.0b6e4fd3';

const bookings = [];

// default params
const createBooking = function (flightNo, numPass = 1, price = 399 * numPass) {
  const booking = {
    flightNo,
    numPass,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('F20A');
createBooking('UM03', 7);

console.clear();
const flight = 'HY80';
const sivan = {
  name: 'parama sivan',
  passport: 44093431,
};

const checkIN = function (flightNum, passenger) {
  flightNum = 'UB92';
  passenger.name = 'maha devan';

  if (passenger.passport === 44093431) {
    console.log('check in');
  } else {
    console.log('wrong passport');
  }
};
checkIN(flight, sivan);
console.log(flight, sivan);

const newPassport = function (person) {
  return (person.passport = Math.trunc(Math.random() * 1e10));
};

console.log(newPassport(sivan));
checkIN(flight, sivan);

// higher order functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirst = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

// HOF
const transformer = function (str, fn) {
  console.log(`>>>> ${fn(str)}`);

  console.log(`transformed by: ${fn.name}`);
};
transformer('python is the one', upperFirst);
transformer('python is the one', oneWord);

function High5() {
  // console.log('😀');
}

document.body.addEventListener('click', High5);

['doc', 'sis', 'ceo', 'bus'].forEach(High5);

// return a fn
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const hey = greet('hey');
hey('jon');

greet('daa')('pulle');

// Challenge
const greets = greeting => name => console.log(`${greeting} ${name}`);

greets('dee')('vde');

const lufthansa = {
  airLine: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNo, name) {
    console.log(
      `${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNo}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNo}`, name });
  },
};

lufthansa.book(201, 'max swell');
console.log(lufthansa.bookings);

const escrowing = {
  airLine: 'escrowing',
  iataCode: 'EC',
  bookings: [],
};

const book = lufthansa.book;

// call method
book.call(escrowing, 201, 'kim dae');
console.log(escrowing);

book.call(lufthansa, 101, 'mia markova');

// apply method
const flightDate = [410, 'jesus crack'];
book.apply(escrowing, flightDate);

// use this 🟢🟢🟢🟢🟢🟢🟢
book.call(escrowing, ...flightDate);

const bookLu = book.bind(lufthansa);
bookLu(93, 'lol fea');

const bookEc = book.bind(escrowing);
bookEc(49, 'angeline lo');

const bookEc34 = book.bind(escrowing, 34);
bookEc34('mariana sun');

// With event listeners
lufthansa.planes = 148;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.2, 100));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

// Challenge
const addTAX = value => rate => value + value * rate;

console.log(addTAX(100)(0.5));

// coding challenge # 1 ⚡

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const ans = parseInt(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n write option number`
      )
    );
    // register the answer
    if (ans < this.answers.length && ans === 'number') {
      alert('wrong num');
    } else {
      this.answers[ans]++;
    }
    this.displayResults();
  },
  displayResults(type = 'array') {
    typeof type == 'object'
      ? console.log(type)
      : console.log(`Poll results are ${this.answers.join(', ')}`);
  },
};

console.log(poll);

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

console.clear();

// IIFE -- Immediately invoked function expression
// self invoking function
(function () {
  console.log('no ooo');
})();

(() => console.log('IIFE'))();

// closures
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    return function () {
      passengerCount++;
      console.log(passengerCount);
    };
  };
};
const booker = secureBooking();
booker()();
booker()();

let n;
const gene = function () {
  const helix = 2;
  n = function () {
    console.log(helix * 10);
  };
};

const h = function () {
  const b = 20;
  n = function () {
    console.log(b * 10);
  };
};
gene();
n();

h();
n();

// 2
const boardPassengers = function (num, waitTime) {
  const perGroup = num / 3;

  setTimeout(() => {
    console.log(`we are now boarding all ${num} passengers`);
    console.log(`there are 3 groups, each with ${perGroup} passengers`);
  }, waitTime * 1000);
  console.log(`will start boarding in ${waitTime} seconds`);
};
const perGroup = 802;

boardPassengers(102, 3);

// coding challenge # 2 ⚡
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'blue';
  document.body.addEventListener('click', () => (header.style.color = 'red'));
})();
