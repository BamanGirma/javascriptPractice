// declearing function
// function printName() {
//   return "Hi there";
// }
// printName();

// var a = function printName() {
//   return "Hi there";
// };

// var printName = () => {
//   return "Hi there";
// };

// var printName = () => "Hi there";

// // arrow function with one argument
// const printName = a => "Hi there";

var pass = 50;
var score = 76;

if (score >= pass) {
  console.log("passed");
}
if (score < pass) console.log("failed");

function checkIfPaased(name, score, pass) {
  if (score >= pass) {
    console.log(name + ": passed");
  } else console.log(name + ": failed");
}
checkIfPaased("Aman", 80, 50);
checkIfPaased("Girma", 30, 50);
checkIfPaased("Gebreyes", 20, 50);

var pass = 50;
var score = 76;

let result = score >= pass ? "passsed" : "failed";
console.log(result);

a=5;
console.log(typeof(a));