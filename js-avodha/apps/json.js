'use strict'
// JSON ==> JavaScript Object Notation

// 👇
const user = `{
  "users": [
    {
      "fName": "sherlock",
      "lName": "Holmes"
    },
    {
      "fName": "john",
      "lName": "watson"
    }
  ]
}`

const pop = {
  fName: 'satan'
}
const userJs = JSON.parse(user)
console.log(userJs);
console.log(userJs.users[0]);

const userJss = JSON.stringify(pop)
console.log(userJss);

