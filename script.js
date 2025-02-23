//sum
document.getElementById('peragrapgh').innerHTML = "Calculation the Sum";

function sum ()
{
let digit1 = document.getElementById('number1').value;
let digit2 = document.getElementById('number2').value;

let converted1 = parseFloat(digit1);
let converted2 = parseFloat(digit2);

let sum = converted1+converted2;

document.getElementById('sum').innerHTML = "The Result is="+sum;
}
