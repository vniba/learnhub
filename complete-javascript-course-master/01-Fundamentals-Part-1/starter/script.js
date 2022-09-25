// * variables
/* let js = 'amazing';
console.log('jon');

let firstName = 'Noemi';
let lastName = 'Ambrose';
console.log(firstName, lastName);

let middle$ = 'Santiago Block';
const pi = 3.141492;

console.log(pi);
 */

// * Data types

/* let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof `hello`);

javaScriptIsFun = 'Yehh 🤟';
console.log(javaScriptIsFun);

let age;
console.log(age);
console.log(typeof age);

age = 2024;
console.log(age);

console.log(typeof null); // object */

// * var | let | const
/* let age = 29;
age = 30;

const birthYear = 1973;

var job = 'programmer'; //! dont
job = 'Hecker';

isNerd = true; // ! dont
console.log(isNerd); */

// * operator precedence
// TODO: it has several checkout MDN
/*
const now = 2027;
const ageJon = now - 1990;
const ageJan = now - 1999;

console.log(now - 1990 > now - 1999);

let x, y;
x = y = 25 - 10 - 5; // x =  y = 10
console.log(x, y);

const averageAge = (ageJan + ageJon) / 2;
console.log(ageJan, ageJon);

console.log(averageAge);
 */

// ? coding challege #1
/*
const markMass = 80;
const johnMass = 100;
const markHeight = 1.8;
const johnHeight = 1.9;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);

console.log(markBMI);
console.log(johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
 */

// * strings- template literals

/* const firstName = 'Dolores';
const job = 'Supervisor';
const birthYear = 2000;
const year = 2025;

const dolores = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(dolores);

console.log(`regular string.....
what is string`);
 */

// * decision
// ~ if..else control structure

/* const age = 18;
const yearsLeft = 18 - age;
if (age >= 18) {
	console.log(`Jon can start Driving licences 🚗`);
} else {
	console.log(`jon is young. Wait another ${yearsLeft} years`);
}

// century
const birthYear = 2001;
let century;
if (birthYear <= 2000) {
	century = 20;
} else {
	century = 21;
}
console.log(century);
 */

// * Type conversion and Coercion

/* // conversion (manual changing)
const inputYear = '2004';
console.log(Number(inputYear), inputYear); // original value sitll string
console.log(Number(inputYear) + 18);

console.log(Number('hello')); // Nan
console.log(typeof NaN); // number

console.log(String(1245), 1234);

// coercion (javascript engine change)
console.log('iam ' + 29 + 'old'); // string
console.log('23' - 10); // number
console.log('23' * '7'); // number
console.log('23' / '2'); // number

let n = '1' + 1; // 11 string
n -= 1; // 11 to number - 1
console.log(n); // 10
 */

// * Falsy (when converted to boolean values are fales)
// ~ falsy value 0, '', undefinded, null, NaN
/*
console.log(Boolean(0)); //f
console.log(Boolean('jon')); //t
console.log(Boolean('')); //f
console.log(Boolean({})); //t
console.log(Boolean(undefined)); //f
console.log(Boolean(null)); //f
console.log(Boolean(NaN)); //f

const money = 1;
if (money) {
	console.log(`Don't spend it all 😝`);
} else {
	console.log(`You Should get a job  😆`);
}

let height;
if (height) {
	console.log(`Yey, height is defined`);
} else {
	console.log(`nop, height is not defined`);
}
 */

// * Equality operators == vs ===

/* const age = '18';
if (age === 18) console.log(`Yeh, yr an adult 🧑 (strict)`);
if (age == 18) console.log(`yeh, yr an adult 🧑 (loose)`);

const favorite = Number(prompt(`whats ur fv number`));
console.log(favorite);
console.log(typeof favorite);

if (favorite == 23) console.log(`amazieee 😃`);
if (favorite === 23) {
	console.log(`amazieee is it😃`);
} else if (favorite == 19) {
	console.log(`what is 19`);
} else {
	console.log(`type 23 or 19 😊`);
}

if (favorite !== 23) console.log(`why not 23`);
 */

// * Boolean Logic
// ~ ' && ' || ' ! '

/* const hasDriversLicens = true;
const hasGoodVision = true;

console.log(hasDriversLicens && hasGoodVision);
console.log(hasDriversLicens || hasGoodVision);
console.log(!hasDriversLicens);

const shoulDrive = hasDriversLicens && hasGoodVision;
if (shoulDrive) {
	console.log(`Sara can drive 🚓`);
} else {
	console.log(`someone else run 🤕`);
}

const isTired = true;

console.log(hasDriversLicens || hasGoodVision || isTired);

if (hasDriversLicens && hasGoodVision && !isTired) {
	console.log('drive baby 😎');
} else {
	console.log('no no dont 😠');
}
 */

// ? conding challenge #
/* onst dolphinScore = (100 + 110 + 10) / 3;
const koalaSocres = (100 + 110 + 40) / 3;
console.log(dolphinScore, koalaSocres);

if (dolphinScore === koalaSocres) console.log(`draw my boys`);
else if (dolphinScore > koalaSocres)
	console.log(`${dolphinScore} winner dolphs 🏆`);
else console.log(`${koalaSocres} winner koalas 🏆`);

// bonus 1

const minimumScore = 100;
if (
	dolphinScore === koalaSocres &&
	(koalaSocres || dolphinScore) <= minimumScore
) {
	console.log(`not enough points`);
} else if (dolphinScore > koalaSocres && dolphinScore >= minimumScore) {
	console.log(`my boys dolphine wins 🚩`);
} else if (koalaSocres > dolphinScore && koalaSocres >= minimumScore) {
	console.log(`my boys koalas wins 🚩`);
} else {
	console.log(`draw my boys draw`);
}
 */
//* switch

/* const day = 'sunday';

switch (day) {
	case 'monday': /// day === 'monday'
		console.log('plan my trip 🚲');
		break;
	case 'tuesday':
		console.log('prepare for exam 📔');
		break;
	case 'wednesday':
	case 'thursday':
		console.log('writing book 😎');
		break;
	case 'friday':
	case 'saturday':
		console.log('weekend pych 🙃');
		break;
	case 'sunday':
		console.log('sunday funday 👙');
	default:
		break;
}

if (day === 'monday') console.log('preapare for trip 🥲');
else if (day === 'tuesday') console.log('gym gym 💪');
else if (day === 'wednesday' || day === 'thursday')
	console.log('hecking time 💻');
else if (day === 'friday' || day === 'saturday')
	console.log('paradise walk 🌲');
else if (day === 'sunday') console.log('funday sunday 🧟');
else console.log('which day mfk');
 */

// * expression & statement
//  expression is  produce a value eg: 8+3, true && true;
// statement not produce value itself : eg:
// if(22<89) {const string = 'whati'}

// console.log(`iam ${33 + 88 - 99} yeh${foo}`);

// * conditonal operator : ternery
/*
const age = 10;
const output = age > 19 ? 'i like 🍷' : 'i like 🍠';

let drink;
if (age >= 15) {
	drink = '🍷';
} else {
	drink = '🔌';
}
console.log(drink);
console.log(`i like  ${age > 10 ? 'yours' : 'mees'} you`);
 */

// ? coding challenge #

// const bill = 10 + 10 + 20;

// const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;

// console.warn(
// 	`The bill was ${bill}, The tip was ${tip} and total value is ${bill + tip} `
// );

// TODO: javascript releases
// firsname: Mocha
// next: livescript
// atlast : javascript
/*
 1997 : ES1
 2015 : ES6m
 */
