'use strict';

// Promises
// syntax
const prom = new Promise(function (myResolve, myReject) {
  //producing code
  myResolve();
  myReject();
});

// consuming code
prom.then((value) => 'success'), (error) => error; {
}



const demo = document.querySelector('#demoOne');

function show(x) {
  demo.innerHTML = x;
}

const veryPromise = new Promise(function (resolve, reject) {
  let x = 10;
  if (x > 90) {
    resolve('yes');
  } else {
    reject('no');
  }
});

veryPromise.then((value) => show(value), (error) => show(error));

// promise with callback

const promises = new Promise(function (resolve, reject) {
  setTimeout((func) => {
    resolve('success 🪅');
  }, 3000);
});

promises.then((value) => console.log(value), (error) => console.log(error)
);

// xml request
function getFile(show) {
  const req = new XMLHttpRequest();
  req.open('GET', './core/random.html');

  req.onload = function () {
    if (req.status == 200) {
      show(this.responseText);
    } else {
      show('error' + req.status);
    }
  };
  req.send();
}
getFile(show);


// with Promise

const proms = new Promise(function (resolve, reject) {
  const request = new XMLHttpRequest();
  request.open('GET', './core/faker.html');
  request.onload = function () {
    if (request.status === 200) {
      resolve(this.responseText);
    } else {
      reject('error ' + request.statusText);
      console.log(request.status);
    }
  };
  request.send();
});

proms.then((value) => show(value), (error) => show(error));
