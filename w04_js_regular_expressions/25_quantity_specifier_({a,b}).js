//? Specify Upper and Lower Number of Matches ({})

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/; // perulangan 1 karakter dalam range {3-5}
console.log(multipleA.test(A4)); // true
console.log(multipleA.test(A2)); // false

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);

console.log(result) // true