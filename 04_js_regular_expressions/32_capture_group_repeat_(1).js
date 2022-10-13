//? Reuse Patterns Using Capture Groups

let repeatStr = "row row row your boat";
let repeatRegex = /(\w+) \1 \1/;
console.log(repeatRegex.test(repeatStr)); // true
console.log(repeatStr.match(repeatRegex)); // ["row row row", "row"]

let repeatStr2 = "regex regex";
let repeatRegex2 = /(\w+)\s\1/;
console.log(repeatRegex2.test(repeatStr2)); // 
console.log(repeatStr2.match(repeatRegex2)); // ["regex regex", "regex"]

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);

console.log(result) // true
console.log(repeatNum.match(reRegex)) // [ '42 42 42', '42', index: 0, input: '42 42 42', groups: undefined ]