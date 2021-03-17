// PART 1
console.log('is this cerulean page on?');
console.log(2312321);
console.log('2' + 2);

// Variables

green;
red = '#f9423a';
console.log(red);

var blue;
var green = '#556b2f';
console.log(green);

let name;
const _gravity = 9.8;

var garden;
function gravity_moon() {
  garden = 'jersey';
  const gravity = _gravity / 6;
  console.log(gravity);
}

gravity_moon();
console.log(garden);
console.log(_gravity);
// console.log(gravity);

let my_color_list = [
  '#f9423a',
  '#556b2f',
  '#bada55',
  'lavender',
  'cerulean',
  'goldenrod',
];

console.log(my_color_list);
console.log(my_color_list[3]);
console.log(my_color_list.length);

// CONDITIONALS

let h1 = d3.select('h1');
let h1_jquery = $('h1');

console.log(2 == '2');

// this runs because "false is false" is a true statement.
const should_color_change = true;
if (should_color_change) {
  // CASE: should_color_change is true. Change the color of the heading.
  h1.style('color', my_color_list[3]);
} else {
  // CASE: should_color_change is false. Do nothing and tell the coder nothing changes.
  console.log('color does not change');
}

// this runs!
if (2 + 2 == 4) {
  console.log("we're not in in 1984");
}
// This never runs because 4 is not equal to 5
if (2 + 2 == 5) {
  console.log("we're in 1984");
}

// This will run because 4 is not equal to 5. You make a not equal comparison by puttin ! before ==.
if (2 + 2 != 5) {
  console.log(2 + 2);
  h1.style('color', 'orange');
}

let my_name = 'Lenny';
if (my_name.length < 4) {
  console.log('Hello', my_name);
} else if (my_name.length == 1) {
  if (my_name == '1') {
    console.log('Hi One');
  }
} else {
  console.log('Howdy!');
}

// With logic, AND needs both conditions to be true
if (should_color_change && my_name.length > 4) {
  // CASE should_color_change is true AND my name is longer than 4 characters. Only time this runs.
  console.log(
    'should_color_change is true and my_name is longer than 4 characters'
  );
}

// With logic, using OR just needs 1 of the 2 conditions to be true to work
let today = 'Thursday';
if (should_color_change || today == 'Wednesday') {
  h1.style('font-size', '54pt');
}

let pick_color = 1;

function pickAColor(number) {
  switch (number) {
    case 1:
      console.log('pick color 1');
      console.log(my_color_list[number]);

      break;
    case 2:
      console.log('pick color 2');
      console.log(my_color_list[number]);
      break;
    default:
      console.log('pick something else');
  }
}

pickAColor(3);
