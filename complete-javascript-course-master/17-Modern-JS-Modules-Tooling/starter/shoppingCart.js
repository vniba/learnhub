// exporting
console.log('exporting');

// block
console.log('fetch body');
await fetch('/06-Modal/final/index.html');
console.log('finish body');
const shippingCost = 100;
export const cart = [];

export const addToCart = function (pro, qut) {
  cart.push(pro, qut);
  console.log(cart);
};
const total = 200;
const totalQuantity = 10;

export { total, totalQuantity as qt };

export default function (pro, qut) {
  cart.push(pro, qut);
  console.log(cart);
}
