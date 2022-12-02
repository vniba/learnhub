'use strict';

//* Array [] -- indexbased

const array1 = [1, 'a', true, undefined, NaN, null, { name: 'doe' }, [10]];
console.log(array1);

const cars = []; // literal
cars[0] = 'austin';
cars[1] = 'ferari';
cars[2] = 'roys';
console.log(cars);

const fishes = new Array('fighter', 'dolphin'); // constructor
console.log(typeof fishes, fishes);

cars[2] = 'Tesla';
console.log(cars[0], '🚗', cars[2]);

// * properties

// length
const color = ['red 🟥', 'green🟩', 'blue🟦'];
console.log(color.length);
console.log(color[color.length - 1]); // last item

// loop in array
const fruits = [
  'banana 🍌',
  'orange 🍊',
  'kiwi 🥝',
  'grapes 🍇',
  'pinapple 🍍',
];
console.log(fruits);
const fruitsLength = fruits.length;

let demo = ``;
for (let i = 0; i < fruitsLength; i++) {
  // demo += `<ul> <li> ${fruits[i]} </li> </ul>`;
}
//dom manipulation
document.querySelector('#demo').innerHTML = demo;

//! better way
fruits.forEach((fruit) => {
  demo += `<ul> <li> ${fruit} </li> </ul>`;
});
document.querySelector('#demo').innerHTML = demo;

// push - add element to end
fruits.push('apple 🍎');
console.log(fruits);

// arrays with named indexs = associative arrays
const namedIndex = [];
namedIndex['firstName'] = 'Euna';
namedIndex[2] = 'Fay';

console.log(namedIndex['firstName']);
console.log(namedIndex[2]);

// array vs object
/* # array num index based
   # object name index based
*/

// Array constructor
const plants = new Array('palm 🌴', 'evergreen 🌲');
console.log(plants);
//! use this 👉 ' [] '

// recogoniize array
console.log(Array.isArray(fruits)); //Array.isArray()

const fake = {};
console.log(Array.isArray(fake));

//! array Methods

// split
let dummy = 'a,b,c,d';
const dummyArray = dummy.split(',');
console.log(dummyArray);

// array elements to string
// toString()
const veg = ['carrot 🥕', 'onion 🧅', 'borcoli 🥦'];
console.log(veg.toString());

// join()
console.log(veg.join(' '));

const days = ['sun', 'mon', 'tue', 'wed', 'fri', 'thu'];

// pop() - remove element in end
days.pop();
console.log(days);

//  shift() - remove element in start
days.shift();
console.log(days);

// unshift()
days.unshift('sun');
console.log(days);

// to change element
// splice()
days.splice(4, 0, 'thu');
console.log(days);

// to merge multiple array
// concat()
const year = [2010, 2011, 2012];
const year2 = [2013, 2014, 2015];
const yea = [2016, 2017, 2018];

const year3 = year.concat(year2, yea, 2019);
console.log(year3);
