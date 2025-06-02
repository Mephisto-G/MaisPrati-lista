const prompt = require("prompt-sync")()

// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if

let num = parseInt(prompt('Digite um numero: '))
if (isNaN(num)) return console.log('Você não escolheu um número')

num % 2 === 0 ? console.log('Número par') : console.log('Número ímpar');