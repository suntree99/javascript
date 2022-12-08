//? Match Whitespace

// \s = [ \r\t\f\n\v]
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g; // mecari whitespace secara golbal
console.log(whiteSpace.match(spaceRegex)); // [ ' ', ' ' ]

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

console.log(result) // [ ' ', ' ', ' ', ' ', ' ' ]