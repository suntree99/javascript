// ? EXECUTION CONTEXT, HOSITING, & SCOPE

// * Creation phase (fase pembentukan) pada global context
// ? nama var = undefined
// ? nama function = fn()
// ? windows = global object
// ? this = window
// ? hoisting (mengerek) pembuatan 4 hal diatas walaupun ditulis dibawah

// console.log(nama); // undefined
// var nama = 'Budi'

// * Execution phase (fase eksekusi)

// console.log(sayHello()); // Halo, nama saya undefined, saya undefined tahun

// var nama = "Darmawan";
// var umur = 33;

// function sayHello() {
//     console.log(`Halo, nama saya ${nama}, saya ${umur} tahun`)
// }

// -------------------------------------------------------------

// * Function membuat Local Execution Context
// ? yang di dalamnya terdapat creation dan execution context
// ? window
// ? arguments
// ? hoisting

// var nama = 'Budi Darmawan';
// var username = '@budidarmawan';

// function cetakURL() {
//     console.log(arguments); // Arguments { 0: "@darmawan", 1: "@budi", … }
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL('@darmawan', '@budi')); // http://instagram.com/@budidarmawan

// -------------------------------------------------------------

// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c')
//         }

//         c();
//     }

//     b();
// }

// a();

// -------------------------------------------------------------

// function satu() {
//     var nama = "Budi"
//     console.log(nama);
// }

// function dua() {
//     console.log(nama);
// }

// console.log(nama);
// var nama = 'Darmawan'
// satu();
// dua('dodol');
// console.log(nama);