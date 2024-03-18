// console.log("hello");
// console.log("world");

// const firstName = "Aina";
// console.log(firstName);

// console.log(false); //string form of boolean
// console.log(String(false)); //"false" - string form of boolean

// const isMorning = true;
// let

// console.log("1" + 1 + 2);
// console.log(1 + 1 + 2);
// console.log(1 + 1 + "2");

// function addNumbers(num1, num2) {
//   console.log(num1 + num2);
//   return num1 + num2;
// }

// addNumbers(50, 10);

// const total = addNumbers(100, 1);
// console.log(total);

// // function checkAge returns a value when called
// function checkAge(age) {
//   if (age >= 18) {
//     return "adult"; // if the condition is true, return this string and exit
//   }
//   return "non-adult"; // if the condition was false, return this string and exit
// }
// console.log(checkAge(21)); // adult
// console.log(checkAge(13)); // non-adult
// console.log(checkAge(12));
// console.log(checkAge(50));

// const user = {
//   // user object contained within curly braces
//   name: "Aina", // string property with key 'name' and value 'joe'
//   age: 21, // numeric property with key 'age' and value 20
//   "has a dog": true, // multi-word property key 'has a dog' with boolean value true
// };

// console.log(user.name); // get object property called name and log it
// console.log(user.age); // set (or assign) new value to object property called age
// let dogOwner = user["has a dog"]; // get value of property 'has a dog' and assign to new variable
// console.log(dogOwner);
// user.location = "NSW"; // create new object property called location and assign a value
// console.log(user.location);
// delete user.location; // delete property of user object called location
// console.log(user);

// let goal = 5;
// for (let i = 0; i < goal; i++) {
//   console.log(`Iteration ${i} of ${goal}`);
// }

// const phone = {
//   model: "iPhone 11",
//   colour: "black",
//   storage: 64,
// };
// for (let key in phone) {
//   // iterates over each property in the phone object
//   console.log("key: " + key); // prints each object property name (key) in turn
//   console.log("value: " + phone[key]); // prints each object value in turn
// }

let person1 = { name: "Anna" }; // object - stored by reference
let person2 = person1; // person2 points to same memory location as person1
person1.name = "Brian";
console.log(person2.name); // Brian, even though we changed person1.name
let person3 = "Carly"; // string - stored by value
let person4 = person3; // person4 points to different memory location than person3
person3 = "David";
console.log(person4); // still Carly, since person3 and person4 are string primitives
