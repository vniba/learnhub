'use strict';
// ! function

//  syntax

// function
// name (optional)
// ( ) => params
// { } -> block of code
/*
function noName(param1, param2) {
	// code to execute
}

// function invocation, calling
noName(1, 2); */

// functon return -> stop and return value

/* function multiply(x, z) {
	return x * z;
}

console.log(multiply(10, 30));
console.log(multiply(100, 20));

 */

// ? farenheit to celcius

function celce(value) {
	return (value - 32) * (5 / 9);
}

const hundCel = celce(200);
console.log(hundCel);

function cars() {
	let car = 'ferari'; // local scope
	console.log(car);
}

cars();
