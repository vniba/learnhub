'use strict'

// regular expression -- sequence of characters that forms a search pattern

// g - global
// i - no case sensitive
// \w - search words - lower case
// \W - not lower case


let strings = 'virtual Wooden Mouse Mountain car191 Car11'

// syntax --- /pattern/modifiers
let reg = /ge/i
console.log(reg);

// search() , replace()
// search()

console.log(strings.search(/mouse/i))
// replace --  replace a sting using regex

let repl = (strings.replace(/\w car/gi, 'bike'));
console.log(repl)
console.log(strings);

console.clear();

const regex = /ld/ig
console.log(regex.test('hellO w0rld arnold'))

// exec()

let exe = regex.exec('held in arnold')
console.log(exe, typeof exe);
console.log(exe.input);

