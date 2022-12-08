// ? ARROW FUNCTION

// * Function Expression

const tampilNama = function(nama) {
    return `Halo ${nama}`;
}
console.log(tampilNama('Budi')); // Halo Budi

// -------------------------------------------------------------

// * Arrow Function

// satu parameter
const tampilNama1 = (nama) => { return `Halo ${nama}`; }
console.log(tampilNama1('Budi')); // Halo Budi

// dua parameter
const tampilNama2 = (nama, waktu) => {
    return `Selamat ${waktu}, ${nama}`; }
console.log(tampilNama2('Budi', 'Malam' )); // Selamat Malam, Budi

// kalau satu parameter, bisa tanpa ()
const tampilNama1x = nama => { return `Halo ${nama}`; }
console.log(tampilNama1x('Budi')); // Halo Budi

// kalau satu parameter, bisa tanpa (), bisa tanpa {return} jika hanya satu baris
const tampilNamaSimple = nama => `Halo ${nama}`;
console.log(tampilNama('Budi')); // Halo Budi

// kalau tanpa paramater
const tampilTeks = () => `Hello World`;
console.log(tampilTeks()); // Hello World

// -------------------------------------------------------------

// * Map (Array)

let mahasiswa = ['Budi Darmawan', 'Iwan Setiawan', 'Wati Susanti'];

// * Cara Biasa
// let jumlahHuruf = mahasiswa.map(function(nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf); // Array(3) [ 13, 13, 12 ]

// * Dengan Arrow Function
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf); // Array(3) [ 13, 13, 12 ]

// * Mengembalikan Array of Object (nama: nama -> cukup nama)
let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf: nama.length}));
console.table(jumlahHuruf);

// -------------------------------------------------------------