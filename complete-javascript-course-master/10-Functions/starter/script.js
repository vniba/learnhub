'use strict';
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
  console.log('😀');
}

document.body.addEventListener('click', High5);

['doc', 'sis', 'ceo', 'bus'].forEach(High5);
console.clear();
