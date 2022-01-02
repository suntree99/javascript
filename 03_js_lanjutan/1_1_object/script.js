// * Cara untuk membuat Object pada javascript

// -------------------------------------------------------------

// * 1. Object Literal (harus membuat object berulang)

// let mahasiswa1 = {
//     nama: 'Budi',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     }
// }

// let mahasiswa2 = {
//     nama: 'Darmawan',
//     energi: 20,
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     }
// }

// -------------------------------------------------------------

// * 2. Function Declaration (membuat 1 template)

// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     }

//     mahasiswa.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`)
//     }

//     return mahasiswa;
// }

// let budi = Mahasiswa('Budi', 10);
// let darmawan = Mahasiswa('Darmawan', 20);

// -------------------------------------------------------------

// * 3. Constructor Function (menggunakan keyword new)

function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`)
    }

    this.main = function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`)
    }
}

let budi = new Mahasiswa('Budi', 10);
let darmawan = new Mahasiswa('Darmawan', 20);

// -------------------------------------------------------------

// 4. Object.create