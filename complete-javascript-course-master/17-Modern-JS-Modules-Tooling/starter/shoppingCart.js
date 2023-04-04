// // exporting
// console.log('exporting');
//
// // block
// console.log('fetch body');
// await fetch('/06-Modal/final/index.html');
// console.log('finish body');
// const shippingCost = 100;
// export const cart = [];
//
// export const addToCart = function (pro, qut) {
//   cart.push(pro, qut);
//   console.log(cart);
// };
// const total = 200;
// const totalQuantity = 10;
//
// export { total, totalQuantity as qt };
//
// export default function (pro, qut) {
//   cart.push(pro, qut);
//   console.log(cart);
// }

//exporting module
console.log('exporting module 💨');
const shippingCost = 10;
export const cart = [];
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} ${quantity} added to 🛒`);
};

const totalPrice = 2000;
const totalQuantity = 20;
export { totalPrice, totalQuantity as tQ };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} ${quantity} added to 🛒`);
}

export const log = function () {
  console.log(cart, totalPrice);
};

// 'export.name'
//import {name} = Require(path)
