const prompt = require("prompt-sync")()

// Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.


let idade = parseInt(prompt("Dígite sua idade: "))
if (isNaN(idade)) return console.log('Escolha um número')

if (idade <= 10) {
  console.log("Criança");
} else if (idade <= 17) {
  console.log("Adolecente");
} else if (idade <= 60) {
  console.log("Adulto");
} else { 
  console.log("Idoso");
}