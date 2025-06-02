const prompt = require("prompt-sync")()

// Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

let nota = parseFloat(prompt("Dígite sua nota final: "))
if (isNaN(nota)) return console.log('Você não escolheu um número')

if (nota <= 4) {
  console.log("Reprovado");
} else if (nota <= 6) {
  console.log("Recuperação");
} else {
  console.log("Aprovado");
}