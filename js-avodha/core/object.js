'use strict'

let live = true
console.log(typeof live);

console.clear();
const biceps = {
  first: "biceps curl db",
  // methods
  fullWork() {
    return this.first
  }
}
console.log(biceps.fullWork());

// primitives
const str = 'hello moon'
const num = 201
const bool = true
const und = undefined
const nul = null

// object literal
const flowers = {
  rose: ['red', 'yellow', 'white']
}

// Object constructor
const bits = new Object({ one: 1, zero: 0 });
console.log(bits);


const flower2 = flowers
console.log(flower2);

flowers.lilly = ['pink']
