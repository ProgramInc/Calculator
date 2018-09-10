

let results = document.getElementById('results');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('2');
let equals = document.getElementById('equals');
let plus = document.getElementById('+');
let allclear = document.getElementById('allclear');
let times = document.getElementById('x');

typinglist = [];

var medresult = 0;
var currentresult = 0;

allclear.onclick = function(){
  medresult = 0
  currentresult = 0
  results.value = 0
}

num1.onclick = function(){
  medresult = medresult + (num1.innerHTML);
  console.log('the medresult is ' + medresult);
  console.log('the current result is ' + currentresult)

}

num2.onclick = function(){
  medresult = medresult + (num2.innerHTML);
  console.log('the medresult is ' + medresult);
  console.log('the current result is ' + currentresult)
}

plus.onclick = function(){
  results.value = '+'
  currentresult = parseFloat(medresult) + (currentresult);
  console.log('the medresult was ' + medresult);
  console.log('the current result is ' + currentresult)
  medresult = 0
  console.log('the medresult is ' + medresult);
  results.value = parseFloat(currentresult) + parseFloat(medresult);
}

times.onclick = function(){
  results.value = 'X'
  currentresult = parseFloat(medresult) * (currentresult);
  console.log('the medresult was ' + medresult);
  console.log('the current result is ' + currentresult)
  medresult = 0
  console.log('the medresult is ' + medresult);

}



equals.onclick = function(){
  results.value = ''

  console.log('equals = the current result is ' + currentresult);
  console.log('the medresult is ' + medresult);
}

array = [1,'+',2,'+',3];
console.log(parseFloat(array));
