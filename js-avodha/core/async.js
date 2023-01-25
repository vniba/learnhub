'use strict';

// call back
// --> call back function is the one  given as argument to another function

// function sequence ==> js function executed based on sequence of their call not their created place

// callback
function hello(x) {
  document.querySelector('#demoOne').innerHTML = x;
  console.log('hello');

}

function welcome() {
  console.log('running welcome');

  hello('Itaque autem autem dolorem numquam. At quaerat amet molestiae praesentium omnis est molestiae');
}

welcome();

function woman() {
  console.log('first');

}

function man() {
  console.log('second');
}
man();
woman();

console.clear();
// callback function eg:
const demo = document.querySelector('#demoOne');

function showAnswer(result) {
  demo.innerHTML = result;
}

function calc(a, b) {
  let sum = a + b;
  showAnswer(sum);
}

calc(20, 10);

// another
function calcs(a, b, func) {
  let sum = a + b;
  func(sum);
}

calcs(40, 12, showAnswer);
