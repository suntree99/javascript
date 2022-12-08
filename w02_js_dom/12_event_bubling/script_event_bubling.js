// ? STOP PROPAGATION
// * Untuk menghentikan event bubbling

// const close = document.querySelectorAll('.close');

// close.forEach(function(el) {
// 	el.addEventListener('click', function(e) {
// 		e.target.parentElement.style.display = 'none';
// 		e.stopPropagation();
// 	});
// });

// ? EVENT BUBLING
// * Jika element yang diberikan event memiliki child maka child nya akan mendapat event yang sama, sehingga eventnya akan bertumpuk

// const cards = document.querySelectorAll('.card');

// cards.forEach(function(card) {
// 	card.addEventListener('click', function(e){
// 		alert('ok');
// 	})
// })

// ? Cara Lebih Efektif

const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
	if (e.target.className == 'close') {
		e.target.parentElement.style.display = 'none';
		e.preventDefault(); // jika yang diklik adalah link
	}
})