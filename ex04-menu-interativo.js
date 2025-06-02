const prompt = require("prompt-sync")();

/*
  Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
*/

let escolha = Number(prompt("Dígite o número 1, 2 ou 3: "))
console.log(escolha);
if (isNaN(escolha) || escolha === 0) return console.log("Escolha um número válido");

switch (escolha) {
  case 1:
    console.log('Você escolheu 1');
    break
  case 2:
    console.log('Você escolheu 2');
    break
  case 3:
    console.log('Você escolheu 3');
    break
  default:
    console.log('Escolha entre 1, 2 e 3.');
    break
}