'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekday = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const closingHours = {
  [weekday[0]]: {
    cls: 10,
  },
  [weekday[5]]: {
    cls: 11,
  },
  [weekday[3]]: {
    cls: 8,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex, mainIndex = 0, time = '22:43:35)', address }) {
    console.log(
      `Order Received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd in  ${time} to ${address}`
    );
  },
  openingHours: {
    mon: {
      open: 10,
      close: 8,
    },
    wed: {
      open: 10,
      close: 7,
    },
    fri: {
      open: 11,
      close: 5,
    },
  },
  closingHours,
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your tasty pasta 🍉 with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza(main, ...other) {
    console.log(main);
    console.log(other);
  },
};

// const [, , , third] = restaurant.categories;
// console.log(third);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// to swap values
// const temp = main;
// main = secondary;
// secondary = temp;

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const arr = [12, 38, 88];

// const [first, y, z] = arr;
// console.log(first, y, z);
// console.log(arr);

// destructaring function return
/* const [first, main] = restaurant.order(3, 1);
console.log(first, main);

// nested array
const nested = [2, 4, 6, [1, 3, 5]];
const [one, , , [f, s]] = nested;
console.log(one, f, s);

// add default value
const [a, b = 1, c = 0] = [8, 9];
console.log(a, b, c);
 */

/* // object destructring
const { name: restaurantName, openingHours, categories: catg } = restaurant;

console.log(restaurantName, openingHours, catg);
console.log(openingHours.wed);

// default value
const { menu = ['no menu'], starterMenu: stMenu = [] } = restaurant;

console.log(menu, stMenu);

// mutate variable in object

let x = 12.1;
let y = 10;
const obj = { x: 21, y: 88, z: 199 };

({ x, y } = obj);
console.log(x, y);

// nested object
const {
  wed: { open = 11, close: cl },
} = openingHours;
console.log(open, cl);
 */

/* restaurant.orderDelivery({
  time: '00:06:33',
  address: '7747 Wunsch Station',
  // mainIndex: 2,
  starterIndex: 2,
});
 */

// spread operator ...

const arry = [2, 3, 4];
const newArray = [1, ...arry, 5];
console.log(newArray);

console.log(...newArray);

const newMenu = [...restaurant.mainMenu, 'sushi'];
console.log(newMenu);

// copy array
const copyMainMenu = [...restaurant.mainMenu];

// join array
const fullMainMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(fullMainMenu);

// iterables: arrays, strings ,maps, sets
const stringy = 'Cathryn';
const lete = [...stringy, ' ', 'u'];
console.log(lete);

// const ingredients = [
//   prompt(`let's make pasta, ingredient 1?`),
//   prompt(`ingregdient 2`),
//   prompt(`ingregdient 3`),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Object spread op
const newRestaureant = {
  ...restaurant,
  founder: 'Verda',
  Est: 1892,
};
console.log(newRestaureant);

const restaurantCopy = { ...restaurant }; // shallowcopy
restaurantCopy.name = 'Tina';
console.log(restaurant.name, '😀', restaurantCopy.name);

//* Destructring
// ! spread beacues on right side of =
// rest operator (pack elements to array)
const array = [1, 3, ...[4, 5]];
//! REST beacues on left side of =
const [a, b, c, ...other] = [1, 2, 3, 4, 20];
console.log([a, b, c, ...other]);

const [Pizza, , Risotto, ...otheFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log([Pizza, Risotto, otheFood]);

// REST object to object

const { fri, ...weekdays } = restaurant.openingHours;
console.log([fri, weekdays]);

//* functions
// multiple arguments with REST Argument
const ad = function (...numbers) {
  let sum = 0;
  let i = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  console.log(sum);
};

ad(1, 3, 4);
ad(10, 20, 30);

const xx = [22, 33, 44];
ad(...xx);

restaurant.orderPizza('mushrooms', 'LSD', 'DMT', 'spinach');

restaurant.orderPizza('cannabi');

// use any data types , return any data types
// short-circuiting
console.log(2 || 'eun'); // first value returns
console.log('' || 'yen');
console.log(undefined || null);

restaurant.numGuests = 0;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 20;
console.log(guest1);

const guest2 = restaurant.numGuests || 30;
console.log(guest2);
console.log(10 && 'hello');
console.log('' && undefined);
console.log(10 && null && '');

// es2020 nullish coalescing
// nullish: undefined & null
const guestError = restaurant.numGuests ?? 20;
console.log(guestError);

// logical assignment operator - es2021
const rest1 = {
  name: 'Mrs.',
  numGuests: 0,
};
const rest2 = {
  name: 'Mr.',
  ceo: 'Natalia',
};
// rest2.numGuests = rest2.numGuests || 11
// rest1.numGuests = rest1.numGuests || 11

// or assignment operator ||=
// rest1.numGuests ||= 11
// rest2.numGuests ||= 11

rest1.numGuests ??= 11;
rest2.numGuests ??= 11;
rest2.ceo &&= '<anonymous>';
rest1.ceo &&= '<anonymous>';
console.log(rest1, rest2);

// coding challenge #1 💙

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};
// destructuring players array
const [players1, players2] = game.players;

// destructuring gk and fieldPlayers
const [gk, fieldPlayers] = players1;

//allPlayers array
const allPlayers = [...players1, ...players1];

//team1 final players
const players1Final = [...players1, 'Thiago', 'Coutinho', 'perisic'];

// nesting destructuring
let {
  odds: { team1, x: draw, team2 },
} = game;

// print players name and no of goals
const printGoals = function (...players) {
  console.log(`${players.length} goals scored ${players}`);
};

printGoals(...game.scored);

// which team more likely to win
team1 < team2 && console.log('Team 1 more likely win');
team1 > team2 && console.log('Team 2 more likely win');
console.log(allPlayers, players1Final);
console.log(gk);
console.log(team1, draw, team2);

// for of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const iterator of menu) {
  console.log(iterator);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i} ${el}`);
}

for (const iterator of Object.keys(closingHours)) {
  console.log(iterator);
}
console.log(restaurant.closingHours);

const values = Object.values(closingHours);
console.log(values);

const entry = Object.entries(closingHours);
console.log(entry);

for (const [key, { cls }] of entry) {
  console.log(`on ${key}  close at ${cls}`);
}

if (restaurant.closingHours && restaurant.closingHours.tue)
  console.log(restaurant.closingHours.tue.cls);

// with optional chain
console.log(restaurant.closingHours.tue?.cls);
console.log(restaurant.closingHours?.mon?.cls);

for (const iterator of weekday) {
  const opens = restaurant.closingHours[iterator]?.cls ?? 'really closed';
  console.log(`on ${iterator} we close ${opens}`);
}

// methods

console.log(restaurant.orders?.(1, 2) ?? 'no method');
console.log(restaurant.order?.(1, 2) ?? 'no method');

// array
const user = [{ name: 'elle', age: 20 }];

console.log(user[0]?.name ?? 'user array empty');

console.clear();

// coding challenge no #2 🔴
// ----- 1 --------
for (const [num, iterator] of game.scored.entries()) {
  console.log(`Goal ${num + 1}: ${iterator}`);
}

// ------- 2 ------
let total = 0;
for (const val of Object.values(game.odds)) {
  let leng = Object.values(game.odds).length;
  total += val / leng;
}
console.log(total);

// ------- 3 ---------
for (const [key, odd] of Object.entries(game.odds)) {
  const teamStr = key === 'x' ? 'draw' : game[key];
  console.log(`Odd of victory ${teamStr}: ${odd}`);
}
