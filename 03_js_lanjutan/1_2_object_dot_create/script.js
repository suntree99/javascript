// ? OBJECT.CREATE
// * Cara untuk membuat Object pada javascript

// -------------------------------------------------------------

// * 1. Object Literal (harus membuat object berulang)
// PROBLEM: Tidak efektif jika membuat object yang banyak (ribet dan boros memori)

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
// PROMBLEM: method tetap dibuat secara berulang setiap instansiasi (boros memori)
// SOLUSI: Memisahkan method dalam object terpisah
// PROBLEM: Setiap ada penambahan method, harsus didaftarkan di di object utama (mengelola 2 fucntion)
// SOLUSI: Dengan menggunakan Object.create

const methodMahasiswa = {
    makan: function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`)
    },

    main: function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`)
    },

    tidur: function(jam) {
        this.energi += jam*2;
        console.log(`Halo ${this.nama}, selamat tidur!`)
    }
} 

// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.main = methodMahasiswa.main;
//     mahasiswa.tidur = methodMahasiswa.tidur;

//     return mahasiswa;
// }

// let budi = Mahasiswa('Budi', 10);
// let darmawan = Mahasiswa('Darmawan', 20);

// -------------------------------------------------------------

// * 3. Constructor Function (menggunakan keyword new)

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`)
//     }
// }

// let budi = new Mahasiswa('Budi', 10);
// let darmawan = new Mahasiswa('Darmawan', 20);

// -------------------------------------------------------------

// * 4. Object.create
// PROBLEM: Tetap membuat object lain (method) untuk mendukung object utama
// SOLUSI: Prototype

function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}

let budi = Mahasiswa('Budi', 10);
let darmawan = Mahasiswa('Darmawan', 20);