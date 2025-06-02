const prompt = require("prompt-sync")();

/*
  Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
*/

let nums = [];
for (
  let i = parseFloat(prompt("Dígite um número e 0 para terminar: "));
  i != 0;
  i = parseFloat(prompt("Digite outro número: "))
) {
  if (!isNaN(i)) {
    nums.push(i);
  } 
}
console.log(nums);

if (nums.length === 0) return console.log("Nenhum número dígitado.");

let soma = (nums.reduce((acc, curr) => acc + curr, 0)) / nums.length
console.log(`A média é: ${soma}`);