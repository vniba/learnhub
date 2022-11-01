//* arithmetic operators

// let x = 5;
// let y = 10;

// let z = x + y;
// console.log(z);

/* addition = +
   substraction = -
   div = /
   mult = *
   modulus = %
   incre = ++
   decrem = --
   expnotiation = **
*/

/* let x = 5;
let y = 10;

let z = x + y;
console.log('add', z);
z = x - y;
console.log('sub', z);
z = x * y;
console.log('mult', z);
z = x % y;
console.log('modu', z);
z = x / y;
console.log('div', z);
z = x ** y;
console.log ('exp', z); */

// let a = 1;
// a++;
// console.log('inc', a);
// a--;
// console.log('dec', a);

// * datatypes
// primitive, reference

// * primitives
//  numbers = 1, 2
//  stirngs = 'jon'
// boolean = true or false
// null  = no value in variable(empty set)
//undefined = no value assigned
// symbol = unique
// bigInt = playing with large no

// reference / complex
// Objects = {}
// array = []
// funtions

// Assignment and comparison

// assignment
// : ' = ' assign the value to left variable
// :a += b means a = a + b
// :a -= b means a = a - b
// :a *= b means a = a * b
// :a /= b means a = a / b
// :a %= b means a = a % b

/* let x = 10;
x += 5; // 15
console.log(x);
x -= 10;
console.log(x);
x *= 10;
console.log(x);
x %= 3;
console.log(x);
 */

// string ' '," "
// + concat in string type
/* let fName = 'Anika';
let lName = 'Blick';
let fullName = fName + lName;
console.log(fullName);
fName += lName;
console.log(fName, lName);
 */

/* let text1 = 'accusantium';

text1 += ' sed';

console.log(text1);
 */
/*
let one = 'haii';
let two = 'heloo!';

let three = one + ' ' + two;
console.log(three); */

// let x = 8;
// let y = 'd';
// x += y;
// console.log(x);

// let z = '5' + 5; // type coersion
// console.log(typeof z, z);

// * comparison => true or false
//  == loose equel to => only check for value
//  ===  strict equel to => check both value and datatypes
// not equel to !=   => it return false if conditon is true
//  not strict !==
// > greate than
// < less than
// <= lessthan or equelto
// >= greaterthan or equelto

/* x = 5;
y = '5';
console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y); */

// let x = 5;
// let y = 22;
// console.log(x <= y);

// * logical => true or false
// && , || , !
// && return true only when two condition is true
// || true when one conditon is true
//  return oposite !

// let c = 10;
// let d = 5;
// console.log(!c > d || c < 0);

//     operands 1   operands 2   &&      ||     !
//    true           true     true     true    false
//    true           false    false    true    --
//    false          true     false    true    --
//    false          false    false    false  true

console.log(10 > 20 || 10 >= '0');
console.log(1 === '1');
console.log(3 !== '3');
console.log(1.0 === 1);
console.log(2 + (2 * 4) / 2 - 10);
console.log(2 ** 2 + 10 / 2);

console.log(!2 === 2);
