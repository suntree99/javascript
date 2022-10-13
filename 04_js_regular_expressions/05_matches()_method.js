//? Extract Matches

// match() : di tumpukan jerami yang cocok dengan jarum -> Output : Object in Array
console.log("Hello, World!".match(/Hello/)); // [ 'Hello', index: 0, input: 'Hello, World!', groups: undefined ]

let ourStr = "Regular expressions";
let ourRegex = /expressions/;
console.log(ourStr.match(ourRegex)); // [ 'expressions', index: 8, input: 'Regular expressions', groups: undefined ]

'string'.match(/regex/); // di tumpukan jerami yang cocok dengan jarum
/regex/.test('string'); // mencari jarum di tumpukan jerami

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

console.log(result); // [ 'coding', index: 18, input: "Extract the word 'coding' from this string.", groups: undefined ]