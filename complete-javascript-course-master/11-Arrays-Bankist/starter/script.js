'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

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
console.clear();

movements.forEach((a, i, array) => {
  a > 0
    ? console.log(`${i + 1} you deposited ${a}💲`)
    : console.log(`${i + 1} you Withdraw ${Math.abs(a)}💲`);
  // console.log(array);
});
// break and continue not work 👆

// coding challenge #1
const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const juliaDogs = dogsJulia.slice(1, -2);
  const dogsArray = juliaDogs.concat(dogsKate);

  return dogsArray.forEach((value, index) => {
    const kind = value > 3 ? 'adult' : 'puppy 🐶';
    console.log(
      `Dog number ${index + 1} is an ${kind} and it is ${value} years old`
    );
  });
};

checkDogs(julia, kate);
