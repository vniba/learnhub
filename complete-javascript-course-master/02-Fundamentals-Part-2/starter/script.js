'use strict';
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
	}
}
