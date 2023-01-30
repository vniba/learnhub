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

// Map
const eurToUsd = 1.1;

const moveUsd = movements.map(value => Math.round(value * eurToUsd));

console.log(movements);
console.log(moveUsd);

const moveUsdFor = [];
for (const move of movements) {
  moveUsdFor.push(Math.round(move * eurToUsd));
}
console.log(moveUsdFor);

const moveDes = movements.map((value, index) => {
  return value > 0
    ? `${index + 1} you deposited ${value}💲`
    : `${index + 1} you Withdraw ${Math.abs(value)}💲`;
});

console.log(moveDes);

// filter
const deposits = movements.filter(val => val > 0);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}
console.log(depositsFor);

const withdrawals = movements.filter(val => val < 0);
console.log(withdrawals);

// Reduce method
const sumMovements = movements.reduce((acc, curr) => acc + curr, 0);
console.log(sumMovements);

let total = 0;
for (const val of movements) {
  total += val;
}
console.log(total);

// max value
const maxMovement = movements.reduce(
  (pre, cur) => (pre > cur ? pre : cur),
  movements.at(0)
);
console.log(maxMovement);

// coding challenge # 2
const data = [5, 2, 4, 1, 15, 8, 3];

const calcAvgHumanAge = function (ages) {
  const human = ages
    .map(age => (age <= 2 ? 2 * age : 16 + 4 * age))
    .filter(age => age >= 18)
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0);
  return human;
};
console.log(calcAvgHumanAge(data));

const sumDepositsUsd = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, cur) => acc + cur, 0);

console.log(sumDepositsUsd);

// coding challenge #3
const calcAvgHumanAges = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + 4 * age))
    .filter(age => age >= 18)
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0);

console.log(calcAvgHumanAges(data));

// find method
const firstWithdraw = movements.find(mov => mov < 0);
console.log(firstWithdraw);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Sarah Smith');
console.log(account);

let accountData = [];
for (const acc of accounts) {
  accountData = acc.owner == 'Sarah Smith' ? acc : false;
}

console.log(movements);

// equality
console.log(movements.includes(-130));

// some method --> condition
const isDep = movements.some(mov => mov > 5000);
console.log(isDep);

// every method
console.log(account4.movements.every(a => a > 0));

// callback separate
const dep = mov => mov > 0;
console.log(account4.movements.every(dep));

// flat method
const arr2 = [[1, 3], [2, 4], 7, 0, [10, [11, [12], 13], 14]];
console.log(arr2.flat(3));

const allMove = accounts.map(acc => acc.movements);
console.log(allMove);

const allMoveArr = allMove.flat();
console.log(allMoveArr);

const totalMove = allMoveArr.reduce((acc, cur) => acc + cur, 0);
console.log(totalMove);

// chained op
const chainedMove = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, cur) => acc + cur);
console.log(chainedMove);

// flatMap method -- one level depth
const chainMap = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => acc + cur);

console.log(chainMap);

console.clear();

// sort
const owners = ['zeus', 'jupiter', 'io', 'athena'];
console.log(owners.sort());
console.log(owners);

// num
console.log(movements);

const sortedMov = movements.sort((a, b) => (a < b ? 1 : -1));

const impMov = movements.sort((a, b) => b - a);
console.log(sortedMov);
console.log(impMov);
