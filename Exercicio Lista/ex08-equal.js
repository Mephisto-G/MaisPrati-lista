/*
  Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.
*/

const prompt = require("prompt-sync")();

console.log("ESCOLHA VALORES DIFERENTES");
let value1 = parseInt(prompt("Escolha o primeiro valor: "))
let value2 = parseInt(prompt("Escolha o segundo valor: "))

if (isNaN(value1) || isNaN(value2))
  return console.log("Escolha um valor válido");

if (value1 === value2)
  return console.log("Por favor insira valores diferentes");

value1 > value2
  ? console.log(`${value2} \n${value1}`)
  : console.log(`${value1} \n${value2}`);
