const prompt = require("prompt-sync")();

// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

function tabuada() {
  let num = parseInt(prompt("Escolha a tabuada: "));
  for (let i = 1; i <= 10; i++) {
    console.log(num * i);

    if (i === 10) {
      let continuar = prompt("Quer ver outra tabuada? (S/N)").toLowerCase();
      console.log(continuar);
      if (continuar === "s") {
        tabuada();
      }
      return;
    }
  }
}

tabuada();