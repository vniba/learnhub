'use strict';

// If , If else, if else if
// If => run if condition is true
// else => run conditions is false
// else if => run -- if condition -- is false

// Switch -- to specify alternatives
// switch name: case1 case2

function isLarge(num, num2) {
  if (num > num2) {
    console.log('firs one is larger');
  } else if (num === num2) {
    console.log('they are equal');
  } else {
    console.log('second one is larger');
  }
}

isLarge(10, 10);

let day;
const newDate = new Date().getDay();

switch (newDate) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 3:
    day = 'Tuesday';
    break;
  case 4:
    day = 'Wednesday';
    break;
  case 5:
    day = 'Thursday';
    break;
  case 6:
    day = 'Friday';
    break;
  case 7:
    day = 'Saturday';
    break;
  default:
    day = 'what in the world';
    break;
}
console.log(day);
