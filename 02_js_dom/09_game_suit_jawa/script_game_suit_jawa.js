// -------------------------------------------------------------

function getPilihanComputer() {
  const comp = Math.random();
  if ( comp < 0.34 ) return "gajah";
  if ( comp >= 0.34 && comp < 0.67 ) return "orang";
  return "semut";
}

// -------------------------------------------------------------

function getHasil(comp, player) {
  if ( player == comp ) return "SERI";
  if ( player == "gajah" ) return ( comp == "orang" ) ? "MENANG!" : "KALAH";
  if ( player == "orang") return ( comp == "gajah" ) ? "KALAH" : "MENANG!";
  if ( player == "semut" ) return ( comp == "gajah" ) ? "MENANG!" : "KALAH";
}

// -------------------------------------------------------------

function putar() {
  const imgComputer = document.querySelector('.img-komputer');
  const gambar = ['gajah', 'orang', 'semut'];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function() {
    if ( new Date().getTime() - waktuMulai > 1000 ) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
    if( i == gambar.length) i = 0;
  }, 100);
};

// -------------------------------------------------------------

// * Pilihan Player (sekaligus)
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
  pil.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer)
    
    putar();

    setTimeout(function() {
      const imgComputer = document.querySelector('.img-komputer');
      imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
  
      const info = document.querySelector('.info');
      info.innerHTML = hasil;
    }, 1000)

    // console.log(pilihanComputer);
    // console.log(pilihanPlayer);
    // console.log(hasil);
  });
});

// -------------------------------------------------------------

// * Pilihan Player -> Gajah (satuan)
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer)

//   const imgComputer = document.querySelector('.img-komputer');
//   imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
//   console.log(pilihanComputer);
//   console.log(pilihanPlayer);
//   console.log(hasil);
// });

// -------------------------------------------------------------

// * Pilihan Player -> Orang (satuan)
// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function() {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer)

//   const imgComputer = document.querySelector('.img-komputer');
//   imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
//   console.log(pilihanComputer);
//   console.log(pilihanPlayer);
//   console.log(hasil);
// });

// -------------------------------------------------------------

// * Pilihan Player -> Semut (satuan)
// const psemut = document.querySelector('.semut');
// psemut.addEventListener('click', function() {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = psemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer)

//   const imgComputer = document.querySelector('.img-komputer');
//   imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
//   console.log(pilihanComputer);
//   console.log(pilihanPlayer);
//   console.log(hasil);
// });

// -------------------------------------------------------------