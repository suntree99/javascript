// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
const jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing-masing video
    .map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
    .map(waktu => {
        // 10:30 -> [10,30] dengan split
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })

// jumlah semua detik
    .reduce((total, detik) => total + detik);

// ubah ke jam, menit, detik
const jam = Math.floor(jsLanjut / 3600);
const menit = Math.floor((jsLanjut % 3600) / 60);
const detik = Math.floor(jsLanjut % 3600 % 60);

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.innerHTML = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;

const pJmlVideo = document.querySelector('.jumlah-video');
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
pJmlVideo.innerHTML = `${jmlVideo} Video.`;
