import * as math from './math.js';
import './print.js';

function component() {
  var element = document.createElement('pre');
  let cube_fun = (x) => x ** 2 ;
  let square_fun = x => x * x * x;
  let age = prompt("What number is your favorite", 5)||5;
  let number = 5

  let ask = anwser => anwser ? number = age : number = number

  let check = n => n >= 14 && n <= 90 ? alert("Good!"):alert('Bad!')

  ask(confirm(`Do you agree to use ${age} ?`))
  check(number)

  element.innerHTML = [
    'Hello webpack!',
    `${number} cubed is equal to ${cube_fun(number)}`,
    `${number} squared is equal to ${square_fun(number)}`
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());

 if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     printMe();
   })
 }

