// Fizz Buzz test:
// Scrivi un programma che stampi i numeri da 1
// a 100, ma per i multipli di 3 stampi “Fizz” al
// posto del numero e per i multipli di 5 stampi
// Buzz. Per i numeri che sono sia multipli di 3
// che di 5 stampi FizzBuzz.

// Stampare  i numeri da 1 a 100
var risultato;

for (var i = 1; i <= 100; i++){

  if(i % 3 === 0 && i % 5 === 0 ){
    risultato = 'FizzBuzz';
    console.log(risultato);
  }else if (i % 5 === 0 ) {
    risultato = 'Buzz';
    console.log(risultato);
  }
  else if (i % 3 === 0) {
    risultato = 'Fizz';
    console.log(risultato);
  }
  else {
    console.log(i);
  }
}
