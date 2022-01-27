// ? PREVENT DEFAULT
// * Secara default tag a akan merefresh halaman kembali ke semula saat diklik, untuk menghetikannya digunakan prevent default

const close = document.querySelectorAll('.close');

close.forEach(function(el) {
	el.addEventListener('click', function(e) {
		e.target.parentElement.style.display = 'none';
		e.preventDefault();
	});
});