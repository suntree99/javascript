// ? FILTER, MAP, & REDUCE

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// -------------------------------------------------------------

// ? Mencari angka >= 3

// * dengan for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >=3 ) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// * dengan filter()
// const newAngka = angka.filter(function(a){
//     return a >= 3;
// });
// console.log(newAngka);

// * dengan filter() + arrow function
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

// -------------------------------------------------------------

// ? Mengalikan 2 untuk setiap angka

// * dengan map()
// const newAngka = angka.map(function(a){
//     return a*2;
// })
// console.log(newAngka);

// * dengan map() + arrow function
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

// -------------------------------------------------------------

// ? Menjumlahkan seluruh element array
// * (5) + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9

// ? dengan reduce()
// * reduce((accumulator, currentValue) => accumulator + currentValue, nilaiAwal); // default nilai awal = 0 jika tidak ditulis
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5);
// console.log(newAngka);

// -------------------------------------------------------------

// ? METHOD CHAINING (Menggabungkan HOF di atas)
// * Cari angka > 5, kalikan 3, jumlahkan
const hasil = angka.filter(a => a > 5) // 8, 9, 9
    .map(a => a * 3) // 24, 27, 27
    .reduce((acc, cur) => acc + cur); // 78
console.log(hasil);