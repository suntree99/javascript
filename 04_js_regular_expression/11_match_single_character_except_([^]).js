//? Match Single Characters Not 

let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aiueo]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

console.log(result);
// [
//     ' ', 'b', 'l',
//     'n', 'd', ' ',
//     'm', 'c', '.'
// ]