// ? Konsep THIS pada Arrow Function

// * Constructor Function
// const Mahasiswa = function() {
//     this.nama = 'Budi';
//     this.umur = 33;
//     this.sayHello = function() {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }

// const budi = new Mahasiswa();

// -------------------------------------------------------------

// * Arrow Function
// const Mahasiswa = function() {
//     this.nama = 'Budi';
//     this.umur = 33;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }

// const budi = new Mahasiswa();

// -------------------------------------------------------------

// * Object Literal (Arrow Function tidak memiliki konsep this)
// const mhs1 = {
//     nama: 'Budi',
//     umur: 33,
//     sayHello: () => {
//         console.log(`Halo, nama saya ${mhs1.nama}, dan saya ${mhs1.umur} tahun`);
//     }
// }

// -------------------------------------------------------------

// * Contoh setInterval pada Constructor Function
// const Mahasiswa = function() {
//     this.nama = 'Budi';
//     this.umur = 33;
//     this.sayHello = function() {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }

//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500)
// }

// const budi = new Mahasiswa();

// -------------------------------------------------------------

const box = document.querySelector('.box');
box.addEventListener('click', function(){
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu]
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
})