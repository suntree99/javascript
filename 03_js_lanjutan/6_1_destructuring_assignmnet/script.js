// * Destructuring Assigment / Destructuring Variable

// * PADA ARAY
// const coba = ['satu', 'dua', 'tiga'];

// const [a, b, c,] = coba;
// console.log(a);
// console.log(b);
// console.log(c);

const perkenalan = ['Halo', 'nama', 'saya', 'Budi Darmawan'];
// const [salam, satu, dua, nama] = perkenalan;

// * skip item
// const [salam, , , nama] = perkenalan;
// console.log(nama);

// * swap item
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a)
// console.log(b)

// * return value pada function
// function coba() {
//     return [1, 2];
// };

// const[a, b] = coba();
// console.log(a)
// console.log(b)

// * PADA OBJECT
// const mhs = {
//     nama: 'Budi Darmawan',
//     umur: 33,
//     email: 'budidarmawan@gmail.com' 
// };

// const {nama, umur, email} = mhs; // nama variable harus sama dengan properti
// console.log(nama);
// console.log(umur);
// console.log(email);

// * assignment tanpa deklarasi object
// ({nama, umur} = { nama: 'Budi Darmawan', umur: 33,});

// console.log(nama);
// console.log(umur);

// * assignmen ke nama variable baru
// const mhs = {
//     nama: 'Budi Darmawan',
//     umur: 33,
// };

// const {nama:n, umur:u} = mhs;
// console.log(n);
// console.log(u);

// * memberikan default value
// const mhs = {
//     nama: 'Budi Darmawan',
//     umur: 33,
//     email: 'budidarmawan@gmail.com'
// };

// const {nama, umur, email = 'email@default.com'} = mhs;
// console.log(email);

// * memberi nilai default dan assign ke variabel baru
// const mhs = {
//     nama: 'Budi Darmawan',
//     umur: 33,
//     email: 'budidarmawan@gmail.com'
// };

// const {nama:n, umur:u, email:e = 'email@default.com'} = mhs;
// console.log(e);

// * rest parameter
// const mhs = {
//     nama: 'Budi Darmawan',
//     umur: 33,
//     email: 'budidarmawan@gmail.com'
// };

// const {nama, ...value} = mhs;
// console.log(value);

// * mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id: 123,
    nama: 'Budi Darmawan',
    umur: 33,
    email: 'budidarmawan@gmail.com'
};

function getIdMhs({id, nama}) {
    return id;
}

console.log(getIdMhs(mhs));