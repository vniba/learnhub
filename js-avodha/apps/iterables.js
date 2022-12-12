'use strict';

const sex = ['fantasy', 'attraction', 'fertility', 'birth-control', 'child-birth']
const here = document.querySelector('#here')
const fName = 'macbeth'
console.log(fName);

for (const letter of fName) {
  console.log(letter);
}
// iterating over an array

for (const iterator of sex) {
  console.log(iterator + ' 👽');
}
const human = {
  eyes: 2,
  isIntelligent: true,
  sName: 'homosapiens'
}

// SETS - collection of unique value
// no duplicate will include
const letters = new Set(['a', 'b', 'a', 1, '1', 1.0])

console.log(letters, typeof letters);

letters.add('hello', 'a')
console.log(letters);


const cloths = new Set()

const nil = 'nilone'
const cot = 'cotton'

cloths.add(nil)
cloths.add(cot)
console.log(cloths.size, cloths);

// for each in set
let output = ''
letters.forEach((value) => {
  output += value + '<br>'
})

here.innerHTML = output

const num = new Set([1, 2, 3, 4, 5, [9, 8, 5, 3, 1]])
for (const iterator of num.values()) {
  console.log(iterator);
}

// Map  -- it hols key value pairs , key can be any datatypes

const mapping = new Map([['Legacy', 1000], [789, 'bond'], [null, [1.1, 3, 4, [1]]]]);
console.log(mapping);
console.log(mapping.get('Legacy'));
console.log(mapping.get('bond'));
console.log(mapping.get(null));

const bikes = new Map();
bikes.set("ktm", 390)
bikes.set(200, 'ns')
console.log(bikes);
bikes.delete(200)
console.log(bikes);
console.log(bikes.has('ktm'))

const nutrition = new Map([['fat', 100], [150, 'protein'], ['carb', 350]]);

// forEach in Map

let outputs = ''
nutrition.forEach((a, b) => outputs += `${a} : ${b} <br>`)
here.innerHTML = outputs

// for of
for (const iterator of nutrition) {
  console.log(iterator);
}
console.clear();

