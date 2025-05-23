'use strict';

// async and await

async function asyncfn() {
  const promised = new Promise(function (resolve, reject) {
    resolve('success 🍒');
    reject('error ⚡');
  });
  document.querySelector('#demoOne').innerHTML = await promised;
  console.log('wh');
}

asyncfn();
// asyncfn().then((value) => console.log(value), (error) => console.log(error)
// );

// with settimeout

async function setFn() {
  const promised = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('request is success'), 3000);
  });

  document.querySelector('#demoOne').innerHTML = await promised;
}

setFn();

// xml
document.querySelector('#btn');

async function xmlGet() {
  const promises = new Promise(function (resolve, reject) {

    const getXml = new XMLHttpRequest();
    getXml.open('GET', './core/faker.html');

    getXml.onload = function () {
      if (getXml.status === 200) {
        resolve(this.responseText);
      } else {
        reject(this.statusText);
      }
    };
    getXml.send();
  });
  document.querySelector('#demoOne').innerHTML = await promises;
}

btn.addEventListener('click', xmlGet);
