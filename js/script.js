// Fizz Buzz test:
// Scrivi un programma che stampi i numeri da 1
// a 100, ma per i multipli di 3 stampi “Fizz” al
// posto del numero e per i multipli di 5 stampi
// Buzz. Per i numeri che sono sia multipli di 3
// che di 5 stampi FizzBuzz.

// Stampare  i numeri da 1 a 100
var numberList = '';
var result;

for (var i = 1; i <= 100; i++){

  if (i % 3 === 0 && i % 5 === 0 ) {
    result = 'FizzBuzz';

  } else if (i % 5 === 0 ) {
    result = 'Buzz';

  } else if (i % 3 === 0) {
    result = 'Fizz';

  } else {
    result = i;
  }
  // numberList = document.getElementById('number_list').innerHTML;
  // document.getElementById('number_list').innerHTML = numberList + '<li>' + result + '</li>';
  console.log(result);
  numberList += '<li>' + result + '</li>';
}
document.getElementById('number_list').innerHTML = numberList;
