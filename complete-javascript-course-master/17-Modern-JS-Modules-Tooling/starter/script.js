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
 */
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
