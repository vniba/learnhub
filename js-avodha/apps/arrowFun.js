'use strict'

// arrow function  ()=>{}

let hello = () => 'here are now'

console.log(hello());

let sum = (a, b, c) => {
  let total = 0
  total = a + b + c
  return total
}
console.log(sum(1, 3, 2));

const obj = {
  fName: 'Kaleigh',
  age: 21,
  user: () => {
    return this
    //return window obj
  },
  user1() {
    return this
  }
}
console.log(obj.user());
console.log(obj.user1())
