//? Match All (\d)

// \d = [0-9] semua angka dari 0-9
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;

console.log(result) // 4