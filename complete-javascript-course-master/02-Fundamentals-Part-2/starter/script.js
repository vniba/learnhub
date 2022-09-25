"use strict";
/*
let hasDiversEyes = false;
const passTest = true;
if (passTest) hasDiversEyes = true;
if (hasDiversEyes) console.log('what'); */

// const private = 'video';
// const interface= 'audio'

/* logger(); // calling, running, invocking

function logger() {
	console.log('my name is jon 😍');
}

const juiceOutput = foodProcessor(2, 8);
console.log(juiceOutput);

function foodProcessor(apples, berries) {
	return `juice with ${apples} 🍎 ${berries} 🫐`;
}

const appleBerry = foodProcessor(10, 10);
console.log(appleBerry);
 */

/* const output = calcage1(2000);
console.log(output);

// ! function declaration
function calcage1(birthYear) {
	return 2030 - birthYear;
}

// !function expression
const calcAge2 = function (birthYear) {
	return 2030 - birthYear;
};
console.log(calcAge2(2005));
 */

// * Arrow function =>
/*
const output = (birthYear) => 2030 - birthYear;
console.log(output(2010));

const retirement = (birthYear, firsName) => {
	const age = 2030 - birthYear;
	return `${firsName} retire in ${age} years`;
};

console.log(retirement(2010, 'jon'));
 */

// * function calling other function

/* function cutFruit(fruit) {
	return fruit * 4;
}

const output = foodProcessor(3, 4);
console.log(output);

function foodProcessor(apples, berries) {
	const applePeice = cutFruit(apples);
	const berriPeice = cutFruit(berries);
	return `juice with ${applePeice} 🍎 ${berriPeice} 🫐`;
}
 */
/*
function calcAge(value) {
	return 2035 - value;
}

console.log(untillRetirement(1998, 'honai'));
console.log(untillRetirement(1960, 'jonai'));

function untillRetirement(birthYear, firsName) {
	const age = calcAge(birthYear);
	const retire = 65 - age;
	if (retire > 0) return `${firsName} retire in ${retire} years 🔯`;
	else return `${firsName} retired from ${age - 65} years 🙄`;
} */

// ? coding challenge #1
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
const dolphinScore = calcAverage(10, 20, 500);
const koalaScore = calcAverage(10, 20, 300);
console.log(dolphinScore, koalaScore);

const output = checkWinner(dolphinScore, koalaScore);

function checkWinner(avgDolphins, avgKoalas) {
	if (avgDolphins >= 2 * avgKoalas) {
		console.log(
			`Dolphins win  with (${avgDolphins} vs ${avgKoalas}) points 🏆`
		);
	} else if (avgKoalas >= 2 * avgDolphins) {
		console.log(`Koalas win  with (${avgKoalas} vs ${avgDolphins}) points 🏆`);
	} else {
		console.log('nobody wins');
	}}*/

// * Data structure
// * Array
/*
const friends = ['jon', 'jane', 'bob', 'angela', 'Shania'];
console.log(friends);

const years = new Array(1883, 222, 3333, 88.333); // ! not recommend
console.log(years);

console.log(friends[0]);
console.log(friends[3]);

console.log(friends.length); // no of elements
console.log(friends[friends.length - 1]); // last element

friends[3] = 'Aleen'; // assign new value
console.log(friends);

const jon = ['jon', 'doe', 2030 - 2022, '5.5', true, friends];
console.log(jon);
 */
// Exercise

/*const calcAge = function (birthYear) {
	return 2037 - birthYear;
};

const year = [2001, 2008, 2010, 2020, 1899, 1977];

const ageOne = calcAge(year[0]);
const ageTwo = calcAge(year[1]);
const ageLast = calcAge(year[year.length - 1]);
const ages = [ageOne, ageTwo, ageLast];
 */

// * array  methods
/*
const friends = ['jon', 'jane', 'bob', 'angela', 'Shania'];
const newFriens = friends.push('kimike'); // add to end
console.log(newFriens);

friends.unshift('Mike'); // add to start
console.log(friends);

console.log(friends); // remove last value
friends.pop();
console.log(friends.pop()); // return removed value

friends.shift(); // remove first value
console.log(friends);
console.log(friends.shift()); // return removed value

console.log(friends);
console.log(friends.indexOf('bob')); // to find index of value

console.log(friends.includes('jane')); // return a boolean value

friends.push('23');
console.log(friends.includes(23)); // use strict

if (friends.includes('angela')) {
	console.log('yeh 😀 it is');
}
 */

// ? coding challenge #2

// const bills = [125, 555, 44];

// const calcTip = (bill) =>
// 	bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(calcTip(100));

// let tips = [];

// tips.push(calcTip(bills[0]));
// tips.push(calcTip(bills[1]));
// tips.push(calcTip(bills[2]));

// const total = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(tips);
// console.log(total);

// const sum = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
// console.log(sum);

// * object

/* const jone = {
	firstName: 'jone',
	lastName: 'deo',
	age: 28,
	job: 'hecker',
	friends: ['Curtis', 'Lubowitz', 'Santa', 'Thurman'],
};

console.log(jone);
// dot and bracket notation

// dot notaion
console.log(jone.firstName);
console.log(jone.age);
 */
// [] notation , we can use any expression
/* const namea = 'Name';

console.log(jone['first' + namea]);
console.log(jone['lastName']);

const interest = prompt(
	'enter ur future ? enter ur fav words in these : alea , zieo , uios , voie '
);
 */
//  use if dont know what value is in future

/* const food = {
	alea: 'no fking way u live',
	zieo: 'money and drugs',
	uios: 'rich with no ...',
	voie: 'undead',
};

if (food[interest]) {
	console.log(food[interest]);
} else {
	console.log('enter correct word');
}
 */

/* jone.location = 'greek';
console.log(jone);

// ? small challenge
const newSent = `${jone.firstName} has ${jone.friends.length} friends, and his best friend is called ${jone.friends[0]}`;

console.log(newSent);
 */

/* const jone = {
	firstName: 'jone',
	lastName: 'deo',
	birthYear: 2002,
	isMarrid: true,
	job: 'hecker',
	friends: ['Curtis', 'Lubowitz', 'Santa', 'Thurman'],
	calcAge: function () {
		this.age = 2025 - this.birthYear;
		return this.age;
	},
	// ? small challange
	getSummary() {
		return `${this.firstName} is a ${this.calcAge()}-year old ${
			this.job
		}, and he has ${this.isMarrid ? 'a' : 'no'} married`;
	},
};

// ! use this 😀

console.log(jone.calcAge()); // calling function once

console.log(jone.age); // retrive data many time
console.log(jone.age); // retrive data many time
console.log(jone.age); // retrive data many time

console.log(jone.getSummary()); */

// ? coding challange #3

const mark = {
	fullName: "Mark Miller",
	mass: 78,
	height: 1.69,
	calcBMI() {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	},
};

const john = {
	fullName: "John Smith",
	mass: 92,
	height: 1.95,
	calcBMI() {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	},
};

john.calcBMI();
mark.calcBMI();
console.log(john.bmi, mark.bmi);

if (mark.bmi > john.bmi) {
	console.log(
		`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
	);
} else {
	console.log(
		`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
	);
}
