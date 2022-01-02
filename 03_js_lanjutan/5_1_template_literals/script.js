// * TEMPLATE LITERALS / TEMPLATE STRING

// const nama = 'Budi';
// const umur = 33;
// console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`)

// * Embedded Expressions
// console.log(`${1 * 2}`)
// console.log(`${alert('Halo!')}`)

// const x = 11;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// * HTML Fragments
const mhs = {
    nama: 'Budi Darmawan',
    umur: 33,
    nrp: '0102030405',
    email: 'budidarmwan@gmail.com'
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el)