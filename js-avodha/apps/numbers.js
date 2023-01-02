'use strict';

/* // js numbers
const integer = 1234;
const decimal = 23.34;
console.log(integer, typeof decimal);

// exponential scientific notaion  e(n)-(for how manay zeros)
let exp = 1e1;
const exp2 = 1e-1;
console.log(exp + exp2);
 */

/* // 16 base integer after 15num it round up
const a = 19999999999999999;
console.log(a);
 */

// concat 'type coersion' //convert inot leftside data types
let a = 2;
let b = '2';
console.log(a + b);
console.log(a - b); // 0

const e = 20;
const d = 10;
const f = '30';
console.log(e * f); // 600
console.log(f + e + d); // 302010

// convert string to number
const x = 5;
const y = '5';
const z = '10';
console.log(x * y, y * x); // 25
console.log(z * y); // 50

// ! only ' + ' will conact other arithmetic operators will coerce

const g = 10 / 's';
const h = 10 / '2';
console.log(g); //NaN
console.log(isNaN(h));

const i = NaN;
const j = 2;
console.log(i * j); // NaN => if NaN used with num result will be NaN

// Infinity - num which browser cannot handle
let k = 3;
let l = '';

while (k != Infinity) {
  k *= k;
  l = l + k + ' ';
}

console.log(k, l);

let m = -2 / 0;
console.log(m); // infinity , -infinity

// convert to number system
const n = 10;
console.log(n.toString(2)); //binary
console.log(n.toString(8)); // octa
console.log(n.toString(16)); // hexadecimal

// new keyword with Number
let o = new Number(222);
console.log(o, typeof o);

const p = 33;
const q = new Number(33);
console.log(q === p); // false

const r = new Number(10);
const s = new Number(10);
console.log(r === s); //false

// numbers method
// toString(radix) - return value as string
const nums = 10;
console.log(nums.toString());

// literals
console.log((15).toString());

// expression
console.log((100 + 20).toString());

// toExponential() - return value with exponetial notation
const expe = 12.234;
console.log(expe.toExponential(2));

// toFixed - return value with fixed notion
const fix = 3.1415;
const fixd = 2.81;
console.log(fix.toFixed(3));
console.log(fixd.toFixed()); // 3

//  toPrecision()
const prec = 2.7182;
console.log(prec.toPrecision(3));

// toLcaleString() - return local string
const local = 22e5;
console.log(local.toLocaleString());

// return value in primitive
const isNum = 2e2;
console.log(typeof isNum);
console.log(isNum.valueOf());
console.log((23 - 10).valueOf());

// convert  to number - parseInt(), Number(), parsefloat()

const numMeth = ' 10  0';
const numMethFlo = '10.13';
const numFal = true;

console.log(parseInt(numMeth)); // convert string to number
console.log(parseFloat(numMethFlo)); // floating to number

console.log(Number(numFal)); // convert to num

// number method used in date
const dte = Number(new Date('1970-01-02')); // value in millisecond
const starDate = Number(new Date('1970-01-01')); // value in millisecond b/w staring date to current date
console.log(starDate);

console.log(dte, typeof dte); // return full date

// parseInt()
const parse = -15.888;
const parseStr = '12';
console.log(parse);

console.log(parseInt(parseStr)); // num need to first
console.log(parseInt(parse));

// parseFloat()
const parseflot = '12.11';
console.log(parseFloat(parseflot));

// number properties

// max value - return largest possible num in js
// Min value - return smallest posiible num in js
// infinity  - num after browser cannot handle
// -infinity - negative ''
//  NaN      - Not a Number
// First-date = 1970-01-01

const max = Number.MAX_VALUE;
const min = Number.MIN_VALUE;
const pInf = Number.POSITIVE_INFINITY;
const nInf = Number.NEGATIVE_INFINITY;
const naan = Number.NaN;

console.log('max-value', max);
console.log('min-value', min);
console.log('infinity', pInf);
console.log('-infinity', nInf);
console.log('NaN', naan);
