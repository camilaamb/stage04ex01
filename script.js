let numberOne = prompt("Insira um número")
let numberTwo = prompt("Insira outro número")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const soma = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = (numberOne / numberTwo).toFixed(2)
const resto = numberOne % numberTwo

alert("Soma: " + soma)
alert("Subtração: " + sub)
alert("Multiplicação: " + mult)
alert("Divisão: " + div)
alert("Resto da divisão: " + resto)

let parImpar = resto

if (parImpar = 0) {
  alert("A soma dos dois números é par: " + soma)
} 
else {
  alert("A soma dos dois números é impar: " + soma)
}

if (numberOne == numberTwo) {
  alert("Os números são iguais")
} 
else {
  alert("Os números são diferentes")
}

