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

// | coding challege #1

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
