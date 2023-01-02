'use strict'

const num = 123
const str = 'Elroy'
const isLive = true
const hai = null
const defined = undefined

console.log(typeof num, num);
console.log(typeof str, str);
console.log(typeof hai, hai);

// objects
// object, Array, Date, String, Number, Boolean

const there = document.querySelector('#here')

let user = {
  fName: 'hitler'
  , lName: 'Beer'
  , age: 40
}
console.log(user, typeof user);

user = null
console.log(user);


// ++++++++++++ type conversion ------------

// number to string
let stringy = '123'
console.log(stringy, typeof stringy);

let numStr = parseInt(stringy)
console.log(numStr, typeof numStr);

console.log(parseFloat('1.20'));

let unary = + '2e5' //-- convert string to num
console.log(unary)
console.clear();

// string to number
let numbers = 987
console.log(numbers.toString());

let expo = 1509.12
// console.log(expo.toExponential());
console.log(expo.toPrecision(2))
