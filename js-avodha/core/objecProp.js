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
console.clear();
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
