// ? PROTOTYPE

// * 4. Object.create
// PROBLEM: Tetap membuat object lain (method) untuk mendukung object utama
// SOLUSI: Prototype (method yang sudah disediakan javascript)

// function Mahasiswa(nama, energi) {
//     // let mahasiswa = Object.create(methodMahasiswa); // dengan Function Declaration
//     // let this = Object.create(Mahasiswa.prototype); // dengan Constructor Function
    
//     this.nama = nama;
//     this.energi = energi;

//     // return mahasiswa; // dengan Function Declaration
//     // return this; // dengan Constructor Function
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`)
// };

// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`)
// };

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi += jam*2;
//         console.log(`Halo ${this.nama}, selamat tidur!`)
// }; 

// let budi = new Mahasiswa('Budi', 10);
// let darmawan = new Mahasiswa('Darmawan', 20);

// -------------------------------------------------------------

// * Versi Class -> improvement (yang dijalankan sebenarnya adalah prototype)

class Mahasiswa {
    constructor (nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan!`;
    }
    
    main(jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, selamat bermain!`;
    }
    
    tidur(jam) {
        this.energi += jam*2;
        `Halo ${this.nama}, selamat tidur!`;
    }
}

let budi = new Mahasiswa('Budi', 10);
let darmawan = new Mahasiswa('Darmawan', 20);