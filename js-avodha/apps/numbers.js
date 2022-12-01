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
console.log(n.toString(32)); //

// new keyword with Number
let o = new Number(222);
console.log(o, typeof o);

const p = 33;
const q = new Number(33);
console.log(q === p); // false

const r = new Number(10);
const s = new Number(10);
console.log(r === s); //false
