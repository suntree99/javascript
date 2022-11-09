//? Specify Upper and Lower Number of Matches

let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3}h/; // mencari perulangan 1 karakter dengan jumlah yang tepat {3}
console.log(multipleA.test(A4)); // false
console.log(multipleA.test(A3)); // true
console.log(multipleA.test(A100)); // false

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

console.log(result) // true