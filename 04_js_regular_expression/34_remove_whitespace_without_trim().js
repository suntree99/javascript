//? Remove Whitespace from Start and End

let hello = "   Hello, World!  ";
let wsRegex = /\s*(.*)\s\s+/; // Change this line
let replaceText = "$1"
let result = hello.replace(wsRegex, replaceText); // Change this line

console.log(result) // Hello, World!