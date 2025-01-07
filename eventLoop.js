console.log("one");
setTimeout(() => console.log("two"), 2000);
setTimeout(() => console.log("three"), 0);
console.log("four");

function call() {
  console.log("setTimout");
}
setTimeout(call, 0);

console.log("one!");
console.log("two!");

function logThree() {
  console.log("three!");
}
function logThreeAndFour() {
  logThree();
  console.log("four!");
}

logThreeAndFour();
