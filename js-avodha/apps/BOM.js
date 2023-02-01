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
btn.addEventListener('click', () => window.open('http://localhost:5050/'));

// to close a window
const clos = document.querySelector('#cls');
clos.addEventListener('click', () => window.close());

// move to
const move = window.document.querySelector('#mve');
move.addEventListener('click', () => window.moveTo(1, 2));

// resize the window
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

resize.addEventListener('click', () => location.assign('https://www.google.com/'));

// history
history.back();
history.forward();
history.go();
