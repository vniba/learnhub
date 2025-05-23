'use strict'

// scope -- accessability of variables
//scopes > global, block, function

let globe = '🌍' // global
{
  const globe = '🌐' // block
  console.log(globe);
}

function the() {
  const globe = '🔴' // function
  console.log(globe);
}
the()
console.log(globe);

// hoisting  -- function declaration and variables move top of scopes

foo()

function foo() {
  console.log('foo bar');
}
