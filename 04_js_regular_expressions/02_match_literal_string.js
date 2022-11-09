//? Match Literal Strings

let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/; 
console.log(testRegex.test(testStr)); // true

let wrongRegex = /kevin/; // regex memperhatikan besar kecilnya huruf
console.log(wrongRegex.test(testStr)); // false

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);

console.log(result); // true