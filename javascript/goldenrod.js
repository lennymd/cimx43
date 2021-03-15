// Our best friend

// string!
console.log('Is this thing on?');

// Data Types in JavaScript

console.log(2);
console.log(2.00000001);

// Math with numbers:

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 / 0);
console.log(Infinity / Infinity);

// If you see something like 2++ it means increase by 1. If you see 2-- it means decrease by 1.

console.log(12 % 5);

// Strings

console.log('this is a string');
console.log('this is a string'.length);
console.log('"Wait," he said. ');

// Concatenation: adding string together ---
console.log('This' + ' and ' + 'that');
console.log('2' + 2);

console.log(true);
console.log(false);
console.log('------------------');
console.log(2 + 2 + 700 == 4);

// VARIABLES
console.log('------------------');
console.log('------------------');
console.log('------------------');
console.log('------------------');
console.log('------------------');
console.log('------------------');

// define and assign at the same time with nothing before the variable name;
foo = 2;
console.log(foo);

// define and assign at the same time with var keyword;
var foo = 20;
console.log(foo);

// define with let keyword;
let x;
x = 20;

let thereBe = 'light';

// define and assign with const keyword
const gravity = 9.8;
console.log(gravity);
// gravity = "this";
console.log(gravity);

// VARIABLE NAME RULES
// 1. start with a letter, underscore, or dollar sign -- no numbers
// 2. no spaces
// 3. Can't have certain special characters: ! . , / \ + - * =

/* This is a multi-line javascript comment, but almost nobody uses it.
Because it's a pain to write. */

// const moo = 4;
// This is how you define a function
function test() {
  const moo = 4;
  console.log(moo);
}
test();

// console.log('this is moo again', moo);

let an_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let another_array = [0, '1', 'song', gravity];

console.log(another_array);
// console.log(an_array.length);
console.log(another_array[3]);

// UPDATING an array
another_array[3] = gravity * 2;
console.log(another_array);

let a_third_array = [];
let a_4th_array = new Array();
