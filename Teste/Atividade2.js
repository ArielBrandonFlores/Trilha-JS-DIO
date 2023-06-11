// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const { gets, print } = require("./FuncaoAuxiliar2");

const n = gets();
const numeroParMaior = 0;
const numeroImparMenor = 0;

for (let i = 0; i < n; i++) {
  const numero = gets();

  if (numero % 2 === 0) {
    if (numeroParMaior === 0 || numero > numeroParMaior) {
      numeroParMaior = numero;
    }
  } else {
    if (numeroImparMenor === 0 || numero < numeroImparMenor) {
      numeroImparMenor = numero;
    }
  }
}

print("Maior numero Par:" + numeroParMaior);
print("Menor Numero Impar:" + numeroImparMenor);
