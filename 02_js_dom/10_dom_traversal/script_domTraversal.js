// ? DOM TRAVERSAL

// * Event Handler - satu kontak

// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
// 	card.style.display = 'none';
// });

// * Event Handler - banyak kontak

// const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');

// for( let i = 0; i < close.length; i++ ) {
// 	close[i].addEventListener('click', function() {
// 		card[i].style.display = 'none';
// 	});
// }

// -------------------------------------------------------------

// * DOM Traversal

const close = document.querySelectorAll('.close');

// for( let i = 0; i < close.length; i++ ) {
// 	close[i].addEventListener('click', function(e) {
// 		* close[i].parentElement.style.display = 'none';
// 		e.target.parentElement.style.display = 'none';
// 	});
// }

close.forEach(function(el) {
	el.addEventListener('click', function(e) {
		e.target.parentElement.style.display = 'none';
	});
});

// -------------------------------------------------------------

// * DOM Traversal Method
// - parentNode => node
// - parentElement => elemenet
// - nextSibling => node
// - nextElementSibling => elemenet
// - previousSibling => node
// - previousElementSibling => elemenet

const nama = document.querySelector('.nama');

console.log(nama.parentNode);
console.log(nama.parentElement);
console.log(nama.parentElement.parentElement);
console.log(nama.nextSibling);
console.log(nama.nextElementSibling);
console.log(nama.nextElementSibling.nextElementSibling);
console.log(nama.previousSibling);
console.log(nama.previousElementSibling);
console.log(nama.previousElementSibling.previousElementSibling);