// What are the results of these expressions? (answer first, then use console.log() to check
// "" + 1 + 0; // 10
// console.log("" + 1 + 0);
// "" - 1 + 0; // -1
// console.log("" - 1 + 0);
// true + false; // 1
// console.log(true + false);
// !true; // false
// console.log(!true);
// 6 / "3"; // 2
// console.log(6 / "3");
// "2" * "3"; // 23 --6
// console.log("2" * "3");
// 4 + 5 + "px"; // 9px
// console.log(4 + 5 + "px");
// "$" + 4 + 5; // $45
// console.log("$" + 4 + 5);
// "4" - 2; // 42 --2
// console.log("4" - 2);
// "4px" - 2; // 4px2 --NaN
// console.log("4px" - 2);
// " -9 " + 5; // -9 5
// console.log(" -9 " + 5);
// " -9 " - 5; // 95 --14
// console.log(" -9 " - 5);
// null + 1; // 1
// console.log(null + 1);
// undefined + 1; // NaN
// console.log(undefined + 1);
// undefined == null; // true
// console.log(undefined == null);
// undefined === null; // false
// console.log(undefined === null);
// " \t \n" - 2; // -2
// console.log(" \t \n" - 2);

//Which of the below are not giving the right answer? Why are they not correct? How can we fix them?
// let three = "3";
// let four = "4";
// let thirty = "30";
// //what is the value of the following expressions?
// let addition = three + four; // 34
// console.log(three + four);
// let multiplication = three * four; // 12
// console.log(three * four);
// let division = three / four; // 0.75
// console.log(three / four);
// let subtraction = three - four; // -1
// console.log(three - four);
// let lessThan1 = three < four; // true
// console.log(three < four);
// let lessThan2 = thirty < four; // true -- is not giving the right answer because t < f, use number to fix the number
// console.log(thirty < four);

// Which of the following console.log messages will print? Why?
// if (0) console.log("#1 zero is true");  // is false because it is zero value
// if ("0") console.log("#2 zero is true"); // is true because it is a non-empty string
// if (null) console.log("null is true"); // is false bacause it has no value
// if (-1) console.log("negative is true"); // is true because it is a non-zero number
// if (1) console.log("positive is true"); // is true because it is a non-zero number

// Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?
let a = 2,
  b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
  result += "less than 10";
} else {
  result += "greater than 10";
}
