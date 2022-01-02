// * Function Expression
// const tampilNama = function(nama) {
//     return `Halo ${nama}`;
// }
// console.log(tampilNama('Budi'));

// -------------------------------------------------------------

// * Arrow Function

// satu parameter
const tampilNama1 = (nama) => { return `Halo ${nama}`; }
console.log(tampilNama1('Budi'));

// dua parameter
const tampilNama2 = (nama, waktu) => {
    return `Selamat ${waktu} ,${nama}`; }
console.log(tampilNama2('Budi', 'Malam' ));

// kalau satu parameter, bisa tanpa ()
const tampilNama = nama => { return `Halo ${nama}`; }
console.log(tampilNama('Budi'));

// kalau satu parameter, bisa tanpa (), bisa tanpa {return} jika hanya satu baris
const tampilNamaSimple = nama => `Halo ${nama}`;
console.log(tampilNama('Budi'));

// kalau tanpa paramater
const tampilTeks = () => `Hello World`;
console.log(tampilTeks());

// -------------------------------------------------------------

// * Map

let mahasiswa = ['Budi Darmawan', 'Iwan Setiawan', 'Wati Susanti'];

// * Cara Biasa
// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// * Dengan Arrow Function
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// * Mengembalikan Object (nama: nama -> cukup nama)
let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf: nama.length}));
console.table(jumlahHuruf);

// -------------------------------------------------------------