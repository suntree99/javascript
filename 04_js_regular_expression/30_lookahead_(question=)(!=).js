//? Positive and Negative Lookahead

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/; // memastikan u ada
let qRegex = /q(?!u)/; // memastikan u tidak ada
console.log(quit.match(quRegex)); // [ 'q', index: 0, input: 'qu', groups: undefined ]
console.log(noquit.match(qRegex)); // [ 'q', index: 0, input: 'qt', groups: undefined ]
console.log(quit.match(qRegex)); // null
console.log(noquit.match(quRegex)); // null

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
console.log(checkPass.test(password)); // true

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d{2})/; // Change this line
// memastikan jumlah karakter lebih dari 5 dan memastikan setelah bukan angka ada atau tidak (dimananapun) ada 2 angka berurutan
let result = pwRegex.test(sampleWord);

console.log(result) // false (tidak ada 2 angka berdekatan)