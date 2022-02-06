// ? REST PARAMETER

// * menangkap arguments menjadi array
// function myFunc(a, b, ...myArgs) {
    // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
    // return myArgs; // arguments sisa
    // return Array.from(arguments); // seluruh arguments
    // return [...arguments] // seluruh arguments
// }

// console.log(myFunc(1, 2, 3, 4, 5,));

// -------------------------------------------------------------

// * menjumlahkan semua element argument
// function myFunc(...angka) {
    // let total = 0;
    // for (const a of angka) {
    //     total += a;
    // }
    // return total

//     return angka.reduce((a, b) => a + b);
// }

// console.log(myFunc(1, 2, 3, 4, 5,));

// -------------------------------------------------------------

// * array destructuring
// const kelompok1 = ['Budi', 'Iwan', 'Wati', 'Fajar', 'Hendra'];
// const [ketua, wakil, ...anggota] = kelompok1;

// console.log(ketua);
// console.log(wakil);
// console.log(anggota);

// * object destructuring
// const team = {
//     pm: 'Budi',
//     frontEnd1: 'Iwan',
//     frontEnd2: 'Wati',
//     backEnd: 'Fajar',
//     ux: 'Hendra',
//     devOps: 'Ferry'
// }

// const {pm, ...myTeam} = team;
// console.log(pm)
// console.log(myTeam)

// * filter
function filterBy(type, ...values) {
    // let result = [];
    // for (v of values) {
    //         if (typeof(v) === type) {
    //             result.push(v)
    //     }
    // }
    // return result;

    return values.filter(v => typeof v === type);
}

console.log(filterBy('boolean', 1, 2, 'Budi', false, 10, true, 'Darmawan'));