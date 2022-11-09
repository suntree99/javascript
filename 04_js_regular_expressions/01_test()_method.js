//? Using the Test Method (.test())

// test() : mencari jarum di tumpukan jerami -> Output : Boolean
let testStr = "freeCodeCamp"; // jerami
let testRegex = /Code/; // jarum
console.log(testRegex.test(testStr)); // true

let myString = "Hello, World!";
let myRegex = /Hello/; // regex diapit 2 slash
let result = myRegex.test(myString);

console.log(result); // true