/*
  As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
*/

function AmountOfApples(quantity) {
  if (quantity === 0 || isNaN(quantity)) return console.log("Escolha quantidade válidade");

  if (quantity < 12) {
    console.log("Cada maça custa R$ 0,30");
  } else {
    console.log("Cada maça custa R$ 0,25");
  }
}

AmountOfApples(12)