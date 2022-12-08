//? Match Beginning String Patterns

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/; // ^ pada regex mengharuskan kata ada di depan
console.log(firstRegex.test(firstString)); // true
let notFirst = "You can't find Ricky now.";
console.log(firstRegex.test(notFirst)); // false

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

console.log(result); // true