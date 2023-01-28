'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
let arr = ['z', 'y', 'x', 'w'];
// slice
console.log(arr.slice(0, 2));
console.log(arr.slice(-2));
console.log(arr.slice());

// Splice
console.log(arr.splice(-1));
console.log(arr);

// reverse
arr = ['z', 'y', 'x', 'w'];

const arr1 = ['h', 'i', 'g', 'k'];
console.log(arr1.reverse());
console.log(arr1);

// Concat
const letters = arr.concat(arr1);
console.log(letters);
console.log([...arr, ...arr1]);

// join
console.log(letters.join('.'));

// at()
const array = [10, 20, 30, 40];
console.log(array.at(0));

// last element
console.log(array.at(-1));

console.log('hello'.at(0));

// loop
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, move] of movements.entries()) {
  if (move > 0) {
    console.log(`Movement ${i + 1} you deposited ${move}💲`);
  } else console.log(`you Withdraw ${Math.abs(move)}💲`);
}

movements.forEach((a, i, array) => {
  a > 0
    ? console.log(`${i + 1} you deposited ${a}💲`)
    : console.log(`${i + 1} you Withdraw ${Math.abs(a)}💲`);
  // console.log(array);
});
// break and continue not work 👆

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
  console.log(map);
});

const currenciesUnique = new Set(['INR', 'USD', 'USD', 'EUR', 'EUR', 'INR']);
console.log(currenciesUnique);

currenciesUnique.forEach(value => {
  console.log(`${value} `);
});
console.clear();
