//? Check For Mixed Grouping of Characters

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
console.log(testRegex.test(testStr)); // true

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).* Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works

console.log(result) // true
console.log(myString.match(myRegex))
// [
//     'Eleanor Roosevelt',
//     'Eleanor',
//     index: 0,
//     input: 'Eleanor Roosevelt',
//     groups: undefined
// ]