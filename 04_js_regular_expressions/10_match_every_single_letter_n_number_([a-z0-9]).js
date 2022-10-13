//? Match Numbers and Letters of the Alphabet

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
console.log(jennyStr.match(myRegex));
// [
//     'J', 'e', 'n', 'n',
//     'y', '8', '6', '7',
//     '5', '3', '0', '9'
// ]

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex2 = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex2); // Change this line

console.log(result); 
// [
//     'l', 'r', 'r', '3', '4',
//     '5', '2', '6', '5', '3',
//     's', 'r', 'l', 'i', 'i',
//     'o', 's'
// ]