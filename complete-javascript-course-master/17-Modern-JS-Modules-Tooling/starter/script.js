/* // import
// import './shoppingCart.js';
// import { addToCart, total as t, qt } from './shoppingCart.js';
// addToCart('book', 10);
// console.log(t);
// console.log(qt);

// import * as sC from './shoppingCart.js';
// console.log('importing');
// sC.addToCart('pen', 1);
// console.log(sC);

import add, { cart } from './shoppingCart.js';
add('shirt', 1);
add('pc', 2);
add('bag', 10);
console.log(cart);

// const img = await fetch('/04-HTML-CSS/final/index.html').then(value =>
//   value.text()
// );

// document.querySelector('body').innerHTML = img;

async function nop() {
  const ht = await fetch('/06-Modal/final/index.html');
  const data = ht.text();
  return data;
}
const bd = await nop();
document.querySelector('body').innerHTML = bd;

const shoppingCartNew = (function () {
  const cart = [];
  const sCost = 800;
  const total = 2800;
  const tq = 31;
  const addToCart = function (pro, qut) {
    cart.push(pro, qut);
    console.log(cart);
  };
  const orderStock = function (pro, qut) {
    cart.push(pro, qut);
    console.log(cart);
  };
  return { addToCart, cart, total, tq };
})();
shoppingCartNew.addToCart('tree', 20);

importing module
import './shoppingCart.js'
import {addToCart as aT, totalPrice, tQ} from "./shoppingCart.js";
aT('water', 200);
console.log(totalPrice, tQ);
import * as ShoppingCart from './shoppingCart.js';


console.log('importing module');

// ShoppingCart.addToCart('phone', 2);

import add, { totalPrice, cart, log } from './shoppingCart.js';

add('book', 200);
add('pencil', 300);
console.log(cart);
log();
*/

// const res = await fetch("https://jsonplaceholder.typicode.com/posts")
// const data = await  res.json()
// console.log(data.forEach(ob=>console.log(ob)));
// console.log('nop');
/*const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return { title: data.at(-1).title, body: data.at(-1).body };
};
// clean
getLastPost().then(res => console.log(res));

const lastPost = await getLastPost();
console.log(lastPost);*/
// import { cart } from './shoppingCart';

/*const ShoppingCart = (function () {
  const cart = [];
  const shoppingCost = 300;
  const totalPrice = 82;
  const totalQuantity = 20;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${product} ${quantity} added to 🛒`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered successfully`);
  };
  return { addToCart, cart, totalPrice, totalQuantity };
})();
ShoppingCart.addToCart('usb', 2);
console.log(ShoppingCart.cart);
console.log(ShoppingCart.totalPrice);*/
// import cloneDeep from '../../node_modules/lodash-es/cloneDeep.js';
import cloneDeep from '../../node_modules/lodash-es/cloneDeep.js';
const state = {
  cart: [{ product: 'pen', quantity: 2 }],
  user: { is: false },
};
const stateClone = Object.assign({}, state);
console.log(stateClone);
state.user.is = true;

const stateDeep = cloneDeep(state);
console.log(stateDeep);
state.user.is = false;

import add, { totalPrice, cart, log } from './shoppingCart.js';

add('book', 120);
add('pencil', 300);
console.log(cart);
log();
if (module.hot) {
  module.hot.accept();
}
console.log(cart.find(el => el.quantity >= 1));
import 'core-js/stable';
