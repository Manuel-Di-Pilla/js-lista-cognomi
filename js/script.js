var listaCognomi = ['di luca','amarco','scinni','zinni','lucca','massa','essa']
var cognome = prompt('inserisci il tuo cognome');
listaCognomi.push(cognome);
console.log(listaCognomi);
for (var i = 0; i < listaCognomi.length; i++) {
  listaCognomi.sort();
  console.log(listaCognomi[i]);
  document.getElementById('lista').innerHTML += '<li>' + listaCognomi[i] + '</li>';
}
var posizione = listaCognomi.indexOf (cognome) + 1;
document.getElementById('posizione').innerHTML = posizione;
