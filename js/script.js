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

function add(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "this is not a number";
  }
  var c = a + b;
  return c;
}

var sum = add(5, 10);
console.log(sum);

//question seven
function incrementOne(a) {
  if (isNaN(a) == true) {
    return "this is string, please enter an integer";
  }
  a += 1;
  return a;
}
var res = incrementOne(2);
console.log(res);

//question eight
function tringleArea(b, h) {
  if (isNaN(b) || isNaN(h)) {
    return "this is string, please enter an integer";
  }
  let area = (b * h) / 2;
  return area;
}
let calTriangleArea = tringleArea(10, 2);
console.log(calTriangleArea);
// question nine
function animal(chickens, cows, pigs) {
  if (isNaN(chickens) && isNaN(cows) && isNaN(pigs)) {
    return "this is a string, please enter an integer";
  }
  let chickensLeg = 2 * chickens;
  let cowsLegs = 4 * cows;
  let pigsLegs = 4 * pigs;
  let totalLegs = chickensLeg + cowsLegs + pigsLegs;
  return totalLegs;
}
let totalResults = animal(2, 3, 5);
console.log(totalResults);

//question ten
function threeTimesFirstElement(arr) {
  if (arr.length !== 2) {
    return "Array must contain exactly two elements";
  }
  return 3 * arr[0];
}
const results = threeTimesFirstElement([4, 5]);
console.log(results); // Outputs: 12
// question eleven
function isSameNum(num1, num2) {
  if (typeof num1 == "number" && typeof num2 == "number") {
    var res = "";
    res = num1 === num2 ? "true" : "false";
    return res;
  } else {
    return "this is string, please enter a integer";
  }
}
let ans = isSameNum(2, 2);
console.log(ans);

//question 12
function divisable(num) {
  if (typeof num != "number") {
    return "this is string, please enter a integer";
  } else {
    let b = "";
    b = num % 100 === 0 ? "true" : "false";
    return b;
  }
}
let quotient = divisable(100);
console.log(quotient);

// question 14
function isEvenOrOdd(num) {
  if (typeof num != "number") {
    return "this is string, please enter a integer";
  } else {
    let c = num % 2 === 0 ? "even" : "odd";
    return c;
  }
}
let evenodd = isEvenOrOdd(4);
console.log(evenodd);

// question 15

function grade(score) {
  if (score < 0 && score > 100) {
    return "invalid score";
  } else if (score >= 90 && score <= 100) {
    return "Grade A";
  } else if (score >= 80 && score <= 89) {
    return "Grade B";
  }
  else{
    return "Grade C";
  }
}
let mark = grade(20);
console.log(mark);
