//? Match Single Character with Multiple 

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
console.log(bigStr.match(bgRegex)); // [ 'big', index: 0, input: 'big', groups: undefined ]
console.log(bagStr.match(bgRegex)); // [ 'bag', index: 0, input: 'bag', groups: undefined ]
console.log(bugStr.match(bgRegex)); // [ 'bug', index: 0, input: 'bug', groups: undefined ]
console.log(bogStr.match(bgRegex)); // null

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aiueo]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

console.log(result);
// [
//     'e', 'a', 'e', 'o', 'u', 'i',
//     'e', 'a', 'o', 'e', 'o', 'e',
//     'I', 'a', 'e', 'o', 'o', 'e',
//     'i', 'o', 'e', 'o', 'i', 'e',
//     'i'
// ]