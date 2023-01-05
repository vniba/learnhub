'use strict'

// object prop
const user = {
  fName: "jay",
  lName: "cuttler",
  age: 31
}
console.log(user);
// dot notation
console.log(user.fName);

// [] notation
console.log(user['lName']);

// expression type
const ages = 'age'
console.log(user[ages]);

// for in loop for access key values
for (const key in user) {
  console.log(key, user[key]);
}

// add / delete
user.sex = 'male'
console.log(user);

delete user.age //!don't use delete
console.log(user);

// nested object
const numbers = {
  positive: {
    one: 1,
    two: 2
  },
  negative: {
    one: -1,
    two: -2
  }
}
console.table(numbers);
console.log(numbers.negative['one']);

// nested array
const phonePurchase = {
  name: "redMagic",
  year: 2022,
  users: [
    {
      name: 'Dr. Ashley Turner',
      country: 'Djibouti'
    },
    {
      name: 'Roy Beahan',
      country: 'Hong Kong'
    }
  ]
}
console.log(phonePurchase.users[0]);


const book = {
  name: 'the count of monte cristo',
  author: 'alexander dumas',
  ratings: 4,
  Metadata() {
    return `${this.name} written by ${this.author}`
  }
}
console.log(book);

console.log(book.Metadata());

// adding method
book.story = function () {
  return `${this.name}: is taking about Qui id architecto aut deserunt.`
}
console.log(book.story());


// display in document
const output = document.querySelector('#demoOne')
output.innerHTML = book.Metadata()

let show = ''
for (const key in user) {
  ;
  show += `${user[key]} ✌️`
}
output.innerHTML = show

let look = Object.values(user)
output.innerHTML = look
console.log(look);

// JSON.stringify -- js values to JSON

let jsStr = JSON.stringify(user)
console.log(jsStr);

const dates = {
  name: 'date',
  date: new Date(),
  current() {
    return this.name + this.date('day')
  }
}
console.log(dates);

let dateStr = JSON.stringify(dates)
output.innerHTML = dateStr

const forces = ['weak', 'strong', 'gravity', 'electromagnetic', 0]

output.innerHTML = JSON.stringify(forces)

// js object accessors
// Set Get

const movies = {
  name: 'prey',
  year: 2022,
  lang: 'english',
  boxOffice: 0,
  get data() {
    return `${this.name.toUpperCase()} released in ${this.year} in ${this.lang} language`

  },
  set ids(value) {
    this.boxOffice = value
  }
}

console.log(movies.data);
console.log(movies);

movies.ids = 1000
console.log(movies);

console.clear();

// constructor function
function Interest(name, income, month) {
  this.name = name
  this.income = income
  this.month = month
  this.tax = function () {
    return this.income * this.month / 1.5
  }
}

const firstIntr = new Interest('Marvin', 10000, 6);

console.log(firstIntr);
