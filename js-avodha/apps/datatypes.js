// * primitive & reference
// number  :5
// string  :'jon'
// boolean : true or false
// null    : let x = ''
// undefined : let x;

console.log(typeof 'what happend 🐚');
console.log('jon' + ' doe'); //concat
console.log(3 + '2'); //string
console.log(5 - (3 / 2) * 10 ** 2 + 10); // **, / , -, + (**),(*,/), (+,-) // -135

console.log(15 + 5 + 'bike');
console.log('rocket' + 20 + 10);

// js dynamic
let z = 10;
z = true;
console.log(z);
console.log(typeof null);

let h;
console.log(h);

let n = null;
console.log(typeof n, n);

console.log(10 + 2.999 - 10.1);

// boolean

let me = true;
console.log(typeof me, me);

console.log(5 === 5 && 10 != 10);

let you;
console.log(you);

let meIs = undefined;
console.log(meIs);

// * Array []
// index base 0 to ..
const myArray = [1, 2.2, 3, 'a', 'b'];
const newArray = Array(1, 2, 3, true); // constructor

console.log(myArray);
console.log(newArray);
console.log(myArray.length);

const f1 = ['redbull', 'benz', 'mcleran', 'ferari'];
console.log(f1[0]);
console.log(f1[2]);

// * object
//  key value pair

const myObj = {
	name: 'jane',
	age: 20,
	isMe: false,
};

myObj.exp = 100;

console.log(myObj);

console.log(myObj.name); // dot notation
console.log(myObj['age']); // bracket notation

myObj['nationality'] = 'rome';
console.log(myObj);
