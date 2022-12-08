//? Match Everything But Letters and Numbers

let shortHand2 = /\W/; // \W (huruf besar) menjadi pengecualian dari \w
let numbers2 = "42%";
let sentence = "Coding!";
console.log(numbers2.match(shortHand2)); // [ '%', index: 2, input: '42%', groups: undefined ]
console.log(sentence.match(shortHand2)); // [ '!', index: 6, input: 'Coding!', groups: undefined ]

let quoteSample6 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result17 = quoteSample6.match(nonAlphabetRegex).length;

console.log(result17) // 6