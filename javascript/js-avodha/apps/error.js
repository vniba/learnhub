'use strict'

// try, catch, finally, throw

// ===> try -- code block to run
// ===> catch -- code block to handle error
// ===> finally -- recognize regardless of result
// ===> throw -- custom error

try {
  console.log(hello);
} catch (error) {
  console.warn(error);
}
// throw

const output = document.querySelector('#demoOne')
const btn = document.querySelector('#btn')

btn.addEventListener('click', function () {
  let message = document.querySelector('#demoOne')
  const x = document.querySelector('#demo').value

  try {
    if (x === '') throw 'empty value';
    if (x > 10) throw 'enter valid number < 10'
  } catch (error) {
    message.innerHTML = error
    message.style.color = 'red'
  }
  finally {
    message.innerHTML = 'functionalities Falkland Chicken'
  }
})
console.clear();

let num = 20
try {
  num.toPrecision(200)
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

const gui = document.querySelector('#show')
const sub = document.querySelector('#submit')

sub.addEventListener('click', () => {
  const uName = document.querySelector('#name').value
  const uAge = document.querySelector('#age').value
  try {
    if (uName === '') throw 'enter ur name'
    parseInt(uAge)
    if (isNaN(uAge)) throw 'enter valid number'
    if (uAge > 125) throw 'age cannot exceed 125'

  } catch (error) {
    gui.innerHTML = error
  }
})
