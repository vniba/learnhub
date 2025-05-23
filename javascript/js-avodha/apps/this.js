'use strict';

const user = {
  fName: 'Daniela',
  lName: 'Nolan',
  id: 7010,
  fullData() {
    return `${this.fName} ${this.lName} with id ${this.id}`
  },
  heres: this
}

console.log(user.fullData());

// !this -- is a object that function is the property of

const hello = function () {
  console.log(this)
}
hello()

// call()
const user2 = {
  fName: 'Hugh',
  lName: "Trantow",
  fullData() {
    return `${this.fName} ${this.lName}`
  }
}
const user2N = {
  fName: 'Margarett',
  lName: 'Muller'
}

const user2F = user2.fullData.call(user2N)
console.log(user2F)

// bind() -- create a bound function
const user2B = user2.fullData.bind(user2N)
console.log(user2B());
// const
