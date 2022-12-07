'use strict';
// DATE
const currentDate = new Date();
console.log(currentDate);
console.log(currentDate.getTime(), 'current time');

// month start from 0 to 11
const thenDate = new Date(2019, 11, 31, 11, 59, 55, 11);
console.log(thenDate);

const someDate = new Date(999, 9, 9, 9, 9, 9, 9);
console.log(someDate);

const newDate = new Date('december 5 2022 09:54:30');
console.log(newDate);

// Time store in milliseconds
const millSec = new Date(84600);
console.log(millSec);

const expireDate = new Date();
console.log(expireDate.getFullYear(), 'year');

//String methods
// utc - universal time coordinates
// ISO
// GMT
console.log(expireDate.toString());
console.log(expireDate.toLocaleTimeString());
console.log(expireDate.toUTCString());
console.log(expireDate.toISOString());

// GET dates
const getDates = new Date();
console.log(getDates);

const geTime = getDates.getTime(); // get  time in milliseconds
console.log(geTime);

const geFullYear = getDates.getFullYear(); // return full year
console.log(geFullYear);

const geDates = getDates.getHours(); // return  hours
console.log(geDates);

const geMonth = getDates.getMonth(); // return month
console.log(geMonth);

// getting month in string
const months = 'jan feb mar apr may jun jul aug sep oct nov dec';
const monthsA = months.split(' ');
console.log(monthsA);

let mon = monthsA[getDates.getMonth()];
console.log(mon);

// getting day of the week
const d = getDates.getDay();
console.log(d);

const minutes = getDates.getMinutes();
console.log(minutes);

// times in UTC
console.log(getDates.getUTCDate());
console.log(getDates.getUTCMonth());
console.log(getDates.getUTCFullYear());
console.log(getDates.getUTCHours(), 'hours');

// * SET methods
const setFY = new Date();
const setD = new Date();
// set full year
setFY.setFullYear(2001, 11, 25);
console.log(setFY);

// set hours 0 - 23
setD.setHours(2);
console.log(setD);

// set a future date
const dead = new Date();
dead.setDate(dead.getDate() + 100);
console.log(dead);

console.clear();

// compare dates
let date1 = '';
const today = new Date();

const anyDate = new Date();
anyDate.setFullYear(2100, 0, 1);
console.log(anyDate);
if (anyDate > today) {
  date1 += '😀 ur alive';
} else {
  date1 += '🪐 rip';
}
document.querySelector('#demo').innerHTML = date1;
console.log(date1);

const employee = {
  person1: {
    firstName: 'jo',
    age: 20,
    exp: 10,
  },
  person2: {
    firstName: 'do',
    age: 29,
    exp: 6,
  },
};

const experience = employee.person1.exp;

if (experience > 6) {
  document.querySelector('#demo').innerHTML = '🤠 bonus baby';
} else {
  document.querySelector('#demo').innerHTML = '😇 no bonus';
}
