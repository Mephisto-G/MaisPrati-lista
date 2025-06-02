const prompt = require("prompt-sync")();

/*
  Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
*/

let num = parseInt(prompt("Dígite um número para ver o fatorial dele: "))
let fatorial = 1

if (isNaN(num)) return console.log("Apenas número é válido.");

if (num === 1 || num === 0) return console.log(`${num} = 1`);

for (let i = 1; i <= num; i++) {
  console.log(`${num} x ${i} = ${fatorial *= i}`)
}