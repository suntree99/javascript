//? Match Letters of the Alphabet

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/; // [-] mencari kata dengan kemungkinan 1 karakter dalam range
console.log(catStr.match(bgRegex)); // [ 'cat', index: 0, input: 'cat', groups: undefined ]
console.log(batStr.match(bgRegex)); // [ 'bat', index: 0, input: 'bat', groups: undefined ]
console.log(matStr.match(bgRegex)); // null

let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result8 = quoteSample2.match(alphabetRegex); // Change this line

console.log(result8);
// [
//     'T', 'h', 'e', 'q', 'u', 'i', 'c',
//     'k', 'b', 'r', 'o', 'w', 'n', 'f',
//     'o', 'x', 'j', 'u', 'm', 'p', 's',
//     'o', 'v', 'e', 'r', 't', 'h', 'e',
//     'l', 'a', 'z', 'y', 'd', 'o', 'g'
// ]