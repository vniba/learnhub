'use strict';

// BOM --> Browser Object Model

// window Object --> global this
// --> all Browser supported, --> window = Browser

const glob = {
  name: 'global variable',
  value() {
    return this;
  }
};

const demoOn = window.document.querySelector('#demoOne');
demoOn.innerHTML = 'Hai Universe';

// for adjusting size
console.log(window.innerHeight);

console.log(window.innerWidth);

const btn = document.querySelector('#db');

// to open a url in new window
// btn.addEventListener('click', () => window.open('http://localhost:5050/'));

// // to close a window
const clos = document.querySelector('#cls');
// clos.addEventListener('click', () => window.close());

// // move to
const move = window.document.querySelector('#mve');
// move.addEventListener('click', () => window.moveTo(1, 2));

// // resize the window
const resize = document.querySelector('#rez');
// resize.addEventListener('click', () => window.resizeTo(300, 300));

// window screen
// screen --> to get the current screen width & height
console.log('screen width ', window.screen.width);
console.log('screen height', window.screen.height);

// available sizes
console.log(screen.availHeight);
console.log(screen.availWidth);
// to get colorDepth
console.log(screen.colorDepth);

// location
// --> get current page add and redirect to another
// l.href --> to get current url
// l.hostname --> domain name
// l.pathname --> return file path
// l.protocol --> get protocol
// l.assign -->

// resize.addEventListener('click', () => location.assign('https://www.google.com/'));

// history
// history.back();
// history.forward();
// history.go();
// console.clear();
//navigator
// window.navigator

// console.log(window.navigator);
// console.log(navigator.language);
// console.log(navigator.geolocation);

// console.log(navigator.credentials);
console.clear();

// pop-up
// js pop up --> alert | confirm box | prompt

// alert => for confirmation form user
// alert('do you want to close');

// confirm box --> to verify
// confirm('what is time');

function con() {
  let show = '';
  if (confirm('click me')) {
    return show += 'confirmed';
  } return show += 'canceled';
}
// console.log(con());

// prompt --> to get a value from user
// const names = prompt('enter your name? ');
// console.log(names);

// timing events
// setTimeout
// setInterval
// clearTimeout
// clearInterval

// btn.addEventListener('click', () => {
//   setTimeout(() => console.log('waited for 3s'), 3000);
// });

// cookies --> data stored in user Browser in small chunks

// read, create, delete data

// collect data from user
// store in cookies
// when login use this data

// to set cookie value
const setCookie = function (name, value, expDate) {
  const day = new Date();
  day.setTime(day.getTime() + (expDate * 24 * 60 * 60 * 1000));

  let expires = `Expires=${day.toUTCString()}`;

  document.cookie = `${name}=${value};${expires}path=/`;
};

// to get cookie value
const getCookie = function (name) {
  let nam = `${name}=`;
  let decodeCookie = decodeURIComponent(document.cookie);

  let val = decodeCookie.split(';');
  for (let i = 0; i < val.length; i++) {
    let cookie = val[i];

    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(nam) === 0) {
      return cookie.substring(nam.length, cookie.length);
    }

  }
  return " ";
};
// to check cookie value
const checkCookie = function () {
  let userName = getCookie('userName');
  if (userName !== ' ') {
    alert(`welcome agin ${userName}`);
  } else {
    userName = prompt('enter your name: ' + ' ');
    if (userName !== null && userName !== ' ') {
      setCookie('userName', userName, 7);
    }
  }
};



btn.addEventListener('click', () => {
  checkCookie();
});

