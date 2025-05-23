'use strict';

//* Array [] -- indexbased

const demoo = document.querySelector('#demo');
const array1 = [1, 'a', true, undefined, NaN, null, { name: 'doe' }, [10]];
console.log(array1);

const cars = []; // literal
cars[0] = 'austin';
cars[1] = 'ferrari';
cars[2] = 'roes';
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
  'pineapple 🍍',
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

// arrays with named indexes = associative arrays
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

// recognize array
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
const veg = ['carrot 🥕', 'onion 🧅', 'broccoli 🥦'];
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

// splice & slice
const day = [1, 2, 3, 3.2, 5];
// splice()
const day3 = day.splice(3, 1, 4); // return deleted item
console.log(day3);
console.log(day);

// slice - return element start from end - create new array
const day1 = day.slice(1, -1);
console.log(day1);

const cats = ['LaPerm', 'Snowshoe', 'Persian'];
const catsBreed = cats.slice(0, 2);
console.log(catsBreed);

// sort() - based on ASCII char order for str
const alph = ['a', 'c', 'd', 'b'];
const nums = [101, 3, 4, 2, 5, 5, 1.1, 0.3];

// ascending order
console.log(alph.sort()); // use for string
console.log(nums.sort((a, b) => a - b)); // use for num

// descending order
console.log(nums.sort((a, b) => b - a));
// reverse()
console.log(alph.reverse());
console.log(nums.reverse());

//  sort
const rando = [10, 30, 2, 9, 7, 33, 23, 81, 100, 12];
demoo.innerHTML = rando;
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  rando.sort((a, b) => a - b);
  demoo.innerHTML = rando;
});

// Math.max.applay() & Math.min.applay()
function max(numbers) {
  return Math.max.apply(null, numbers);
}
function min(numbers) {
  return Math.min.apply(true, numbers);
}
// !use this
console.log(Math.max(...rando));
// --------------------------------
console.log(max(rando));
console.log(min(rando));

// sort() in object
const season = [
  {
    type: 'summer',
    month: 4,
  },
  {
    type: 'winter',
    month: 12,
  },
  {
    type: 'monsoon',
    month: 7,
  },
];

const seasonByYear = season.sort((a, b) => a.month - b.month);
console.log(seasonByYear, 'by month');

const seasonByType = season.sort(function (a, b) {
  let x = a.type.toLocaleLowerCase();
  let y = b.type.toLocaleLowerCase();
  if (x > y) {
    return 1;
  }
  if (x < y) {
    return -1;
  }
  return 0;
});
console.log(seasonByType, 'by type');
// Array iteration
const nuAr = [1, 3, 7, 5];
let text = '';

// modify existing array
const copyNua = nuAr.forEach((value) => {
  if (value > 4) {
    text += value + ' ';
    return text;
  }
});
console.log(nuAr, 'origin');
console.log(copyNua, 'copy'); // undefined
demoo.innerHTML = text;

// Map() - return new array
const nuAr2 = [1, 3, 7, 5, 8];
text = '';
const copyNu = nuAr2.map((value) => {
  if (value < 5) {
    text += value + '💞 <br>';
    return text;
  } else {
  }
});
console.log(nuAr2, 'origin');
console.log(copyNu, 'copy');
demoo.innerHTML = text;

// filter() -- return new array with condition met with predicate function

const filArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const copyFil = filArray.filter((a, b) => {
  if (a < 8 && b >= 2) {
    return a;
  }
});
console.log(copyFil, 'copy');
console.log(filArray, 'origin');

// reduce() --return a accumulated value
const redd = [1, 2, 3]; //-4

const redSum = redd.reduce(
  (previousValue, currentValue) => (previousValue -= currentValue)
);
console.log(redSum);
// reduceRight() --descending order
const redRight = redd.reduceRight((p, a) => (p -= a)); //0
console.log(redRight);

// every() -- every element satisfy this condition
// true or false
const yell = [1, 2, -3, 4, 3, -4, 3];

const yellowEvery = yell.every((a) => a > 0); //False
console.log(yellowEvery);

// some() -- any of element array satisfy a condition
const yellowSome = yell.some((a) => a > 0);
console.log(yellowSome);

// index
// indexOf() -- index of first occurrence of element
const car = [
  'bmw',
  'rollsRos',
  'ferrari',
  'maruti',
  'mcleran',
  'ferrari',
  'maruti',
];
const position = car.indexOf('ferrari');
console.log(position, 'first');

//lastIndexOf()
const lastPosition = car.lastIndexOf('ferrari');
console.log(lastPosition, 'last');

// findIndex() --return the first element of array which pass the condition
const findIndex = car.findIndex((value) => value == 'maruti');
console.log(findIndex, 'find');

// from() -- for creating an array from iterable object
const arrayFrom = Array.from(
  '13754,_Z7ljD&ikk,83080,80628,80524,54090,JPw1MR=v:h,269,96832,Nb*ZbKj4O'
);
console.log(arrayFrom);

// includes() -- check certain element included in array
console.log(car.includes('bmw'), 'check bmw is include');

//! const
const fire = ['❤️‍🔥', '🔥'];
// fire = ['😀']; you can't

let water = ['😀', '😃']; // only use if need to reassign
water = '😠';
console.log(water);

// _______ don't use this _______
var funny = 'very funny';
funny = 1.2;
console.log(funny);
