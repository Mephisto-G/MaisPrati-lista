const prompt = require("prompt-sync")();

/*
  ESCOLHA ENTRE ForEach ou for
  
  Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
*/

let soma = 0;
let numeros = [];
for (let i = 0; i < 5; i++) {
  console.log(numeros);
  numeros.push(parseFloat(prompt("Dígite um número: ")))
}

if (numeros.some(isNaN)) return console.log("Dígite números válidos.");

// for (let i = 0; i < 5; i++) {
//   console.log(soma += numeros[i]);
// }

numeros.forEach(num => {
  console.log(soma += num);
});
