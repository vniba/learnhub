'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2025-11-18T21:31:17.178Z',
    '2025-12-23T07:42:02.383Z',
    '2026-01-28T09:15:04.904Z',
    '2026-04-01T10:17:24.185Z',
    '2026-05-15T14:11:59.604Z',
    '2026-05-20T17:01:17.194Z',
    '2023-01-30T23:36:17.929Z',
    '2023-02-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2029-11-01T13:15:33.035Z',
    '2029-11-30T09:48:16.867Z',
    '2029-12-25T06:04:23.907Z',
    '2030-01-25T14:18:46.235Z',
    '2030-02-05T16:33:06.386Z',
    '2030-04-11T14:43:26.374Z',
    '2030-07-25T18:49:59.371Z',
    '2030-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions
const formatMovementsDate = function (date) {
  const daysPass = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
  const daysPassed = daysPass(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(navigator.language).format(date);
  }
};

const formatMovement = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};
const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(account.movementsDates[i]);
    const displayDate = formatMovementsDate(date);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formatMovement(
          mov,
          account.locale,
          account.currency
        )}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
  formatMovement(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatMovement(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatMovement(
    Math.abs(out),
    acc.locale,
    acc.currency
  );

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatMovement(
    interest,
    acc.locale,
    acc.currency
  );
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogoutTimer = function () {
  const ticToc = () => {
    const min = `${Math.trunc(time / 60)}`.padStart(2, 0);
    const sec = time % 60;
    // update remaining time UI
    labelTimer.textContent = `${min}:${sec}`;
    // time 0 stop time & logout
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Login to get started`;
      containerApp.style.opacity = 0;
    }
    time--;
  };
  // set time to 5m
  let time = 30;
  // call timer every sec
  ticToc();
  const timer = setInterval(ticToc, 1000);
  return timer;
};
///////////////////////////////////////
// Event handlers
let currentAccount;
startLogoutTimer();

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // exp API
    const now = new Date();
    const options = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      weekday: 'long',
    };
    const locale = window.navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(
      now
    );
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    timer = startLogoutTimer();
    if (timer) clearInterval(timer);

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);
      // add loan date
      currentAccount.movementsDates.push(new Date().toISOString());
      // Update UI
      updateUI(currentAccount);
    }, 3500);

    inputLoanAmount.value = '';
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// number
console.log(23 === 23.0);
console.log(0.1 + 0.2);

console.log(+'12');

// parse
console.log(Number.parseInt(' 100$', 2));

console.log(Number.parseFloat('1.8rem'));

// if value is not a number
console.log(Number.isNaN(23 / 0)); //infinity

// checking value is number
console.log(Number.isFinite('2'));
console.log(Number.isInteger(1 / 0));
// Math
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));

console.log(8 ** (1 / 3));

console.log(Math.max(1, 3, 5, 8, '10'));
console.log(Math.min(1, 3, 5, 8, 0));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.random() * 10);

const randInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
console.log(randInt(10, -20));

// rounding int --> type coercion
console.log(Math.round(21.5));

console.log(Math.ceil(21.2));

console.log(Math.floor('22.8'));

console.log(Math.ceil(-21.2));

console.log(Math.floor(-22.8));

// round float
console.log((1.5).toFixed(3));
console.log(+(3.1415).toFixed(2));

// remainder op
console.log(5 % 2);
console.log(5 / 2);
console.log(10 / 3);
console.log(8 / 3); // 8 - 2 * 3 + 2

console.log(6 % 2);
console.log(7 % 2);

const isEven = n => n % 2 === 0;
console.log(isEven(-2));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach((row, ind) => {
    if (ind % 2 === 0) {
      row.style.background = 'deeppink';
    }
    if (ind % 3 === 0) {
      row.style.background = 'yellow';
    }
  });
});

// numeric separator _
const diameter = 287_460_000_000;
console.log(diameter);

const pi = 3.1415926535;

console.log(Number('1_000')); //NaN
console.log(Number.parseFloat('1_0.010'));

// BigInt
console.log(2 ** 53 - 1); // safe largest value
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 111);

console.log(1939710927091710872010n);

console.log(BigInt(1939710927091710872010));

// operation
console.log(10000n + 10000n);
console.log(100000000000000000n * 1000000000000000000000n);

// exception
console.log(20n === 20);
console.log(typeof 20n);

console.log(1000000000000000000n + 'what');

// console.log(Math.sqrt(17n));

// division
console.log(10n / 3n);
console.log(11n / 3n);

// dates

const dat = new Date();
console.log(dat);
console.log(new Date('10,10,2021'));

console.log(new Date('dec 24 2000'));

console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2100, 5, 11));

console.log(dat.getFullYear());

console.log(new Date(0));

console.log(new Date(7 * 24 * 60 * 60 * 1000));

// date
console.log(dat.getFullYear());
console.log(dat.getDate());
console.log(dat.getDay());
console.log(dat.getHours());
console.log(dat.getMinutes());
console.log(dat.getMilliseconds());
console.log(dat.toISOString());

console.log(dat.getTime());

console.log(Date.now());

console.log(dat.setFullYear('2100'));
console.log(dat);

const born = new Date(2023, 0, 1, 1, 1);
const now = new Date(2023, 1, 2, 10, 5);

const daysPass = (date1, date2) =>
  Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
console.log(daysPass(born, now));

// internationalizing Dates
const date = new Intl.DateTimeFormat('AR').format(new Date());
console.log(date);

// int numbers
const num = 10203040.203;
const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  useGrouping: true,
};
console.log(new Intl.NumberFormat('ar-SY').format(num));
console.log(new Intl.NumberFormat('US', options).format(num));

console.clear();

// timer
setTimeout(name => console.log('here is your delivery', name), 2000, 'wai');
console.log('what');

// cancel time out
const color = ['r', 'g', 'b'];
const colors = setTimeout(
  (f, s, t) => console.log(`white make up these colors ${f} ${s} ${t}`),
  5000,
  ...color
);

if (color.includes('r')) {
  clearTimeout(colors);
}

// setInterval
// setInterval(() => {
//   const now = new Date();
//   console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
// }, 1000);
