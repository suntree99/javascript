// * Tagged Templates
// const nama = 'Budi Darmawan';
// const umur = 33;

// function coba(strings, ...values) {
//     let result = '';
//     strings.forEach((str, i) => {
//         result += `${str}${values[i] || ''}`;
//     });
//     return result;

    // return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// * Contoh Penggunaan Dengan Highlight
const nama = 'Budi Darmawan';
const umur = 33;

function highlight(strings, ...values) {

    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun.`;
console.log(str);
document.body.innerHTML = str;