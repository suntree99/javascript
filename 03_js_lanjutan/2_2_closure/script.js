// CLOSURE

// function init() {
//     return function (nama) {
//         console.log(nama);
//     }
// }

// let panggilNama = init();
// panggilNama('Budi');
// panggilNama('Darmawan');

// -------------------------------------------------------------

// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan`)
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Budi');
// selamatSiang('Iwan');
// selamatMalam('Wati');

// console.dir(selamatMalam);

// -------------------------------------------------------------

let add = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());