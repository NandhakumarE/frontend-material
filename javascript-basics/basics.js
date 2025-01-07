// console.log("Hello world");
// var name = "nandha";
// let age = 20;
// const hobby = "something";

// console.log(name, age, hobby);

// // data types - primitive.

// // number
// let valueNumber = 10;
// console.log(typeof valueNumber);

// // bigInt
// let big = 10n;
// console.log(typeof big);

// // string

// let valueDouble = "nandhakumar";
// let valueSingle = "nandhakumar";

// // ##task##
// let x = 10,
//   y = 20;
// // sum of two number 10 and 20 = 30;
// let template = `sum of two number ${x == 10 ? 100 : 100} and ${y} = ${x + y};`;
// console.log(template);

// // undefined
// let value;

// // null
// let valueNull = null; // empty

// // boolean
// let isValid = true;

// // Symbol
// let symb = new Symbol("gfxchgc");
// console.log(symb);

// Non primitive - object

// Functions.
function sum(a, b) {
  //   if (typeof a !== "number" || typeof b !== "number")
  if (Number.isNaN(a) || Number.isNaN(b)) return "invalid parameter";
  return a + b;
}
// ##task##
console.log(sum(10, 20)); // 30
console.log(sum("10", 20)); // invalid parameter
console.log(sum("10", "20")); // invalid parameter

console.log(10 == "10"); // true -> compare only value
console.log(100 === "100"); // false -> compare value and data type.

// regular function
function sum(a, b) {
  return a + b;
}

// arrow function
const sumArrow = (a, b, sumFn) => {
  const value = sumFn(a, b); // 30
  return value;
};

sumArrow(10, 20, sum);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiple = (a, b) => a * b;
const divide = (a, b) => a % b;
const concat = (a, b) =>
  `value one -> ${a}, value two -> ${b} => concat value -> ${a + b};`;

// higher order function - variation 1(function as argument)
const calculate = (a, b, operationFn) => operationFn(a, b);

console.log(calculate(20, 20, add));
console.log(calculate(20, 20, subtract));
console.log(calculate(20, 20, multiple));
console.log(calculate(20, 20, divide));
console.log(calculate("20", "string", concat));

// value one -> nandha, value two -> kumar => concat value -> nandhakumar;

// higher order function - variation 2(returning function)
// add, subtract, multiple, divide
const calc = (type) => {
  switch (type) {
    case "add":
      return (a, b) => a + b;
    case "subtract":
      return (a, b) => a - b;
    case "multiple":
      return (a, b) => a * b;
    case "divide":
      return (a, b) => a % b;
    default:
      return null;
  }
};

console.log(calc("add2")?.(10, 20));

// IIFE - (Immediately invoked function expression)
(function (a, b) {
  return a + b;
})(10, 20);

// ##scoping
// Global scoping
const global = 10; // access across the file

// functional/local scoping
function abc() {
  let local = 10; // access only within the function
  return global;
}
// console.log(local) // throws error.

// block scoping
if (true) {
  let block = 20; // access only within the block
}
// console.log(block) // throws error.

// ##hoisting

const abcd = "tydfu";

// var vs let

// console.log(gmail); // undefined
// var gmail = "hgchjv@gvh.com";

// console.log(gmail); // Error
// let gmail = "hgchjv@gvh.com";

// work fine - no error
{
  var sample = 10;
}

console.log(sample);

// ##function hoisting

// Regular function - hoist entire function
greeting(); // greeting
function greeting() {
  console.log("greeting");
}

// Arrow function - hoist on variable declaration
// greet(); // error
// const greet = () => console.log("greet");

// console.log("hello wold");
// setTimeout(() => {
//   console.log("setTimeout");
// }, 2000);

// setTimeout(() => {
//   console.log("setTimeout2");
// }, 0);
// console.log("hello wold 2");

// Iteration
// Map - [1,2,3,4,5]
const mapArray = array.map((eachItem) => eachItem * 10);

const str = "sample-value";

// strings - split
console.log(str.split("-"));

// string - slice
console.log(str.slice(-2));

// string - upper case
console.log(str.toUpperCase());

// string - lower case
console.log(str.toLowerCase());

console.log(str.charAt(0).toUpperCase() + str.slice(1));

// ##task
// in => ["sample-value", "lower-case", "upper-case"];
// out => ["Sample-Value", "Lower-Case", "Upper-Case"];

const ar = ["sample-value", "lower-case", "upper-case"];
const result = ar.map((eachItem) => {
  const eachResult = eachItem
    .split("-")
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join("-");
  return eachResult;
});

console.log(result);
