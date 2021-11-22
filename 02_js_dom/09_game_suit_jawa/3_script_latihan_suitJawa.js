function getPilihanComputer() {
  const comp = Math.random();
  if ( comp < 0.34 ) return "gajah";
  if ( comp >= 0.34 && comp < 0.67 ) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  if ( player == comp ) return "SERI";
  if ( player == "gajah" ) return ( comp == "orang" ) ? "MENANG" : "KALAH";
  if ( player == "orang") return ( comp == "gajah" ) ? "KALAH" : "MENANG";
  if ( player == "semut" ) return ( comp == "gajah" ) ? "MENANG" : "KALAH";
}

const pGajah = document.querySelector('.gajah');
pGajah.addEventListener('click', function() {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pGajah.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer)

  const imgComputer = document.querySelector('.img-komputer');
  imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

  const info = document.querySelector('.info');
  info.innerHTML = hasil;
  console.log(pilihanComputer);
  console.log(pilihanPlayer);
  console.log(hasil);
});





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
