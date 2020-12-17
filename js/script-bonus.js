// richiamo la lista in html e creo un array che conterrà i numeri
var listOutput = document.getElementsByTagName('ul')[0];
var listaNumeri = [];
// richiamo la lista in html e creo un array che conterrà i numeri

// creo il costrutto for che assegnerà il fizz e buzz in base alla divisibilità e li inserisce in array

for (var i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 !== 0) {
    listaNumeri.push('fizz');
  }else if (i % 5 === 0 && i % 3 !== 0) {
    listaNumeri.push('buzz');
  }else if (i % 3 === 0 && i % 5 === 0) {
    listaNumeri.push('fizz-buzz');
  }else {
    listaNumeri.push(i);
  }
}
// creo il costrutto for che assegnerà il fizz e buzz in base alla divisibilità e li inserisce in array

// creo un altro costrutto for che riempa la lista con gli elementi dell'array,assegnando una classe specifica per poter lavorare in css
for (var i = 0; i < listaNumeri.length; i++) {
  if (listaNumeri[i] === 'fizz') {
    listOutput.innerHTML += '<li class="fizz">'+ listaNumeri[i] + '</li>';
  }else if (listaNumeri[i] === 'buzz') {
    listOutput.innerHTML += '<li class="buzz">'+ listaNumeri[i] + '</li>';
  }else if (listaNumeri[i] === 'fizz-buzz') {
    listOutput.innerHTML += '<li class="fizz-buzz">'+ listaNumeri[i] + '</li>';
  }else {
    listOutput.innerHTML += '<li class="number">'+ listaNumeri[i] + '</li>';
  }
}
// creo un altro costrutto for che riempa la lista con gli elementi dell'array,assegnando una classe specifica per poter lavorare in css
