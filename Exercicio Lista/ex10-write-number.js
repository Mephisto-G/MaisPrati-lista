const prompt = require("prompt-sync")()

/*
  Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/

let integer = parseInt(prompt("Dígite um número: "))

if (isNaN(integer)) return console.log("Dígite um número válido");

for (let i = 1; i <= 10; i++){ 
  console.log(integer);
}